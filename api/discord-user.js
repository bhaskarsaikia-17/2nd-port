// Vercel serverless function to proxy Discord API requests
// This would require a Discord bot token in environment variables

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { userId } = req.query;

  if (!userId) {
    res.status(400).json({ error: 'User ID is required' });
    return;
  }

  // You would need to set DISCORD_BOT_TOKEN in your Vercel environment variables
  const botToken = process.env.DISCORD_BOT_TOKEN;

  if (!botToken) {
    res.status(500).json({ error: 'Discord bot token not configured' });
    return;
  }

  try {
    const response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
      headers: {
        'Authorization': `Bot ${botToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`);
    }

    const userData = await response.json();
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching Discord user:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
}

// Crafted With ❤️ By Bhaskar
