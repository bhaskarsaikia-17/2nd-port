/**
 * Discord Configuration
 * 
 * IMPORTANT: Change the DISCORD_USER_ID here and it will be applied to ALL components automatically!
 * This is the ONLY place you need to update your Discord User ID.
 * 
 * How to find your Discord User ID:
 * 1. Open Discord
 * 2. Go to User Settings (gear icon)
 * 3. Advanced > Enable Developer Mode
 * 4. Right-click on your profile picture anywhere and select "Copy User ID"
 * 5. Paste that ID below
 */

export const DISCORD_CONFIG = {
  /**
   * Your Discord User ID - UPDATE THIS VALUE TO CHANGE EVERYWHERE
   */
  USER_ID: "1385372134238326834",
  
  /**
   * Discord profile URL - automatically generated from USER_ID
   * No need to modify this manually
   */
  get PROFILE_URL() {
    return `https://discord.com/users/${this.USER_ID}`;
  }
} as const;

// Export individual values for convenience
export const DISCORD_USER_ID = DISCORD_CONFIG.USER_ID;
export const DISCORD_PROFILE_URL = DISCORD_CONFIG.PROFILE_URL;
