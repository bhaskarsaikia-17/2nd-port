import { useState, useEffect } from 'react';

interface DiscordUser {
  id: string;
  username: string;
  global_name: string | null;
  avatar: string | null;
  discriminator: string;
  public_flags: number;
  premium_type?: number; // 0 = None, 1 = Nitro Classic, 2 = Nitro, 3 = Nitro Basic
  avatar_decoration_data: any;
  banner: string | null;
  banner_color: string | null;
}

interface UseDiscordUserReturn {
  user: DiscordUser | null;
  loading: boolean;
  error: string | null;
}

export function useDiscordUser(userId: string): UseDiscordUserReturn {
  const [user, setUser] = useState<DiscordUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiscordUser = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try Discord API v10 through our proxy first
        console.log(`Trying Discord API v10 through proxy: /api/discord-user?userId=${userId}`);
        let response = await fetch(`/api/discord-user?userId=${userId}`);
        
        let userData = null;
        
        if (response.ok) {
          try {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
              const responseText = await response.text();
              console.log('Proxy response text:', responseText);
              userData = JSON.parse(responseText);
              console.log('Successfully fetched user data from proxy:', userData);
            } else {
              console.log('Proxy returned non-JSON response');
            }
          } catch (parseError) {
            console.error('Error parsing proxy response:', parseError);
          }
        } else {
          console.log(`Proxy failed with status: ${response.status}`);
        }
        
        // If proxy failed, try working fallback endpoints
        if (!userData) {
          const fallbackEndpoints = [
            `https://api.lanyard.rest/v1/users/${userId}`,
            `https://discordlookup.mesalytic.moe/v1/user/${userId}`,
          ];
          
          for (const endpoint of fallbackEndpoints) {
            try {
              console.log(`Trying fallback endpoint: ${endpoint}`);
              response = await fetch(endpoint);
              
              if (response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                  const responseText = await response.text();
                  console.log(`Response from ${endpoint}:`, responseText.substring(0, 200) + '...');
                  
                  const data = JSON.parse(responseText);
                  
                  // Handle different API response formats
                  if (endpoint.includes('lanyard')) {
                    userData = data.data?.discord_user;
                  } else {
                    userData = data;
                  }
                  
                  if (userData) {
                    console.log('Successfully fetched user data from fallback:', userData);
                    break;
                  }
                } else {
                  console.log(`${endpoint} returned non-JSON response`);
                }
              }
            } catch (endpointError) {
              console.error(`Fallback endpoint ${endpoint} failed:`, endpointError);
            }
          }
          
          // If all fallbacks fail, try direct Discord API to show the limitation
          if (!userData) {
            console.log(`All fallbacks failed. Trying direct Discord API v10: https://discord.com/api/v10/users/${userId}`);
            try {
              response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
                headers: {
                  'Accept': 'application/json',
                }
              });
              
              const contentType = response.headers.get('content-type');
              const responseText = await response.text();
              console.log('Direct API response status:', response.status);
              console.log('Direct API response content-type:', contentType);
              console.log('Direct API response text:', responseText.substring(0, 200) + '...');
              
              if (response.ok && contentType && contentType.includes('application/json')) {
                userData = JSON.parse(responseText);
              } else {
                throw new Error(`Discord API v10 requires authentication. Status: ${response.status}. Response: ${responseText.substring(0, 100)}`);
              }
            } catch (directError) {
              console.error('Direct Discord API failed as expected:', directError);
              throw new Error(`Discord API v10 requires bot token. Please set up authentication or use the proxy endpoint.`);
            }
          }
        }
        
        if (!userData) {
          throw new Error('Failed to fetch user data from all endpoints');
        }
        
        setUser(userData);
      } catch (err) {
        console.error('Error fetching Discord user:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchDiscordUser();
    }
  }, [userId]);

  return { user, loading, error };
}
