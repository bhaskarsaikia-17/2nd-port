import { useEffect, useState } from "react";
import { useLanyard, type LanyardData } from "react-use-lanyard"; 
import { LoaderCircle } from "lucide-react";
import ElementGlow from '../ui/ElementGlow';
import { useDiscordUser } from '../../hooks/useDiscordUser';
import { useMouseReflector } from '../../hooks/useMouseReflector';
import { StatusWithCustom } from '../discord-activity/status-with-custom';
import { DISCORD_USER_ID } from '../../config/discord';

export default function DiscordProfileCard() {
  // Initialize mouse reflector effect
  useMouseReflector({ 
    cardId: 'discord-profile-card',
    elementGlowOpacity: 0.4,
    proximityThreshold: 120,
    elementProximityThreshold: 60
  });

  // Use Discord API for user profile data
  const { user: discordUser, loading: userLoading, error: userError } = useDiscordUser(DISCORD_USER_ID);
  
  // Use Lanyard API only for custom status and presence
  const [lanyardData, setLanyardData] = useState<LanyardData | null>(null);
  const { loading, status } = useLanyard({ userId: DISCORD_USER_ID, socket: true });

  useEffect(() => {
    if (status) {
      setLanyardData(status);
    }
  }, [loading, status]);

  const discordStatus = lanyardData?.discord_status as "online" | "idle" | "dnd" | "offline" | undefined;
  
  const getStatusColor = (status: string | undefined) => {
    switch (status) {
      case "online": return "#3ba55d";
      case "idle": return "#faa81a";
      case "dnd": return "#ed4245";
      default: return "#747f8d";
    }
  };



  const getAvatarUrl = (userId: string, avatarHash?: string | null) => {
    if (!avatarHash) {
      return `https://cdn.discordapp.com/embed/avatars/0.png`;
    }
    return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.${avatarHash.startsWith('a_') ? 'gif' : 'png'}?size=128`;
  };

  const getBadges = (publicFlags?: number, premiumType?: number): Array<{ name: string; iconUrl: string }> => {
    const badges: Array<{ name: string; iconUrl: string }> = [];
    
    // Add premium badges if available (though these are rarely exposed)
    if (premiumType && premiumType >= 1) {
      badges.push({ 
        name: "Discord Nitro", 
        iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/nitro.svg" 
      });
    }
    
    if (!publicFlags) return badges;

    const flagMap = {
      // Discord Staff (1 << 0)
      1: { name: "Discord Employee", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/discord_employee.svg" },
      // Partnered Server Owner (1 << 1)  
      2: { name: "Partnered Server Owner", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/partner.svg" },
      // HypeSquad Events (1 << 2)
      4: { name: "HypeSquad Events", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/hypesquad_events.svg" },
      // Bug Hunter Level 1 (1 << 3)
      8: { name: "Bug Hunter Level 1", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/bug_hunter_level_1.svg" },
      // SMS Recovery (1 << 4) - Not publicly visible
      // House Bravery (1 << 6)
      64: { name: "House Bravery", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/hypesquad_bravery.svg" },
      // House Brilliance (1 << 7)
      128: { name: "House Brilliance", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/hypesquad_brilliance.svg" },
      // House Balance (1 << 8)
      256: { name: "House Balance", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/hypesquad_balance.svg" },
      // Early Supporter (1 << 9)
      512: { name: "Early Supporter", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/early_supporter.svg" },
      // Team User (1 << 10) - Not a user badge
      // System (1 << 12) - System account
      4096: { name: "System", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/system.svg" },
      // Bug Hunter Level 2 (1 << 14)
      16384: { name: "Bug Hunter Level 2", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/bug_hunter_level_2.svg" },
      // Verified Bot (1 << 16)
      65536: { name: "Verified Bot", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/verified_bot.svg" },
      // Verified Bot Developer (1 << 17)
      131072: { name: "Verified Bot Developer", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/verified_bot_developer.svg" },
      // Moderator Programs Alumni (1 << 18)
      262144: { name: "Moderator Programs Alumni", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/moderator_programs_alumni.svg" },
      // Bot HTTP Interactions (1 << 19) - Not a user badge
      // Spammer (1 << 20) - Not a user badge
      // Active Developer (1 << 22)
      4194304: { name: "Active Developer", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/active_developer.svg" },
      // AutoMod (1 << 23) - Added missing badge
      8388608: { name: "AutoMod", iconUrl: "https://cdn.jsdelivr.net/gh/merlinfuchs/discord-badges/SVG/automod.svg" },
    };

    Object.entries(flagMap).forEach(([flag, badge]) => {
      if (publicFlags & parseInt(flag)) {
        badges.push(badge);
      }
    });

    return badges;
  };

  const isLoading = userLoading || loading;

    if (isLoading) {
    return (
      <div 
        id="discord-profile-card"
        className="backdrop-blur-md bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 rounded-xl p-6 transition-all duration-200 relative"
      >
        <div className="flex items-center justify-center h-32">
          <LoaderCircle className="animate-spin text-indigo-400" size={24} />
        </div>
        <ElementGlow />
      </div>
    );
  }

  if (userError || !discordUser) {
    return (
      <div 
        id="discord-profile-card"
        className="backdrop-blur-md bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 rounded-xl p-6 transition-all duration-200 relative"
      >
        <div className="text-center text-red-500">
          <p>Couldn't load Discord profile.</p>
          {userError && <p className="text-xs mt-1">{userError}</p>}
        </div>
        <ElementGlow />
      </div>
    );
  }

  const badges = getBadges(discordUser.public_flags, discordUser.premium_type);

  return (
    <div 
      id="discord-profile-card"
      className="backdrop-blur-md bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 rounded-xl p-6 transition-all duration-200 relative"
    >
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent" />

      <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-theme-foreground dark:text-white">
        <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0188 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z"/>
        </svg>
        Discord Profile
      </h2>

      <div className="space-y-4">
        {/* User Info Section */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={getAvatarUrl(DISCORD_USER_ID, discordUser.avatar)}
              alt="Discord Avatar"
              className="w-16 h-16 rounded-full border-2 border-black/10 dark:border-white/20"
            />
            {/* Status indicator */}
            <div
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white dark:border-gray-800"
              style={{ backgroundColor: getStatusColor(discordStatus) }}
              title={discordStatus || "Unknown"}
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg text-theme-foreground dark:text-white">
                {discordUser.global_name || discordUser.username}
              </h3>
            </div>
            <p className="text-sm text-theme-foreground-secondary dark:text-gray-400">
              @{discordUser.username}
              {discordUser.discriminator && discordUser.discriminator !== "0" && 
                `#${discordUser.discriminator}`
              }
            </p>
            {lanyardData && (
              <div className="mt-1">
                <StatusWithCustom activity={lanyardData} />
              </div>
            )}
          </div>
        </div>



        {/* Badges */}
        {badges.length > 0 ? (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-theme-foreground dark:text-white">Badges</h4>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg px-2 py-1 flex items-center gap-1"
                  title={badge.name}
                >
                  <img 
                    src={badge.iconUrl} 
                    alt={badge.name}
                    className="w-4 h-4"
                  />
                  <span className="text-xs text-indigo-400 font-medium">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-theme-foreground dark:text-white">Badges</h4>
            <div className="text-xs text-theme-foreground-secondary dark:text-gray-500">
              <p>No public badges available.</p>
              <p className="mt-1 opacity-75">
              </p>
            </div>
          </div>
        )}

        {/* User ID */}
        <div className="text-xs text-theme-foreground-secondary dark:text-gray-500 font-mono">
         Discord User ID: {DISCORD_USER_ID}
        </div>
      </div>

      <ElementGlow />
      
      
    </div>
  );
}
