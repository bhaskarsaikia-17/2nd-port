# Discord API v10 Setup Guide

## Required for Official Discord API Usage

To use the official Discord API v10 endpoint `https://discord.com/api/v10/users/{user.id}`, you need:

### 1. Discord Bot Token
- Go to [Discord Developer Portal](https://discord.com/developers/applications)
- Create a new application or use existing one
- Go to "Bot" section
- Copy the bot token

### 2. Environment Variables
Add to your deployment environment (Vercel):
```
DISCORD_BOT_TOKEN=your_bot_token_here
```

### 3. Bot Permissions
The bot needs to be in a server with the user or have appropriate permissions to fetch user data.

## Current Implementation

The app now uses:
1. **Primary**: Proxy endpoint `/api/discord-user` (requires bot token)
2. **Fallback**: Direct Discord API (will fail without authentication)

## Alternative Approach

If you prefer not to set up a bot token, you can use the previous implementation with public proxy services that already handle Discord API authentication.

---
*Crafted With ❤️ By Bhaskar*
