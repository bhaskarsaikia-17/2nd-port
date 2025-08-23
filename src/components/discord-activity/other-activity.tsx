import type { Activity } from "react-use-lanyard";
import { timestampToRelativeTime, trimToLength } from "../../util";
import { Clock } from "lucide-react";

export function OtherActivity({ activity }: { activity: Activity }) {
    const getImageUrl = (imageUrl: string | undefined) => {
        console.log("🔍 Processing image URL:", imageUrl);
        console.log("🎮 Full activity assets:", activity.assets);
        
        // Return fallback image if no URL provided
        if (!imageUrl) {
            console.log("❌ No image URL provided, using fallback");
            return "https://i.postimg.cc/bNVjsFTQ/avatar.png";
        }

        // Handle external images encoded by Discord
        if (imageUrl.startsWith('mp:external/')) {
            console.log("🔗 Processing mp:external URL");
            const matches = imageUrl.match(/mp:external\/([^/]+)\/(.+)/);
            console.log("🔍 Regex matches:", matches);
            if (matches && matches[2]) {
                let extractedUrl = matches[2];
                if (extractedUrl.startsWith('https/'))
                    extractedUrl = extractedUrl.replace('https/', 'https://');
                console.log("✅ Extracted URL:", extractedUrl);
                return extractedUrl;
            }
        }

        // Handle Discord CDN images
        if (imageUrl.startsWith('https://cdn.discordapp.com')) {
            console.log("✅ Using Discord CDN URL");
            return imageUrl;
        }

        // For application IDs, construct Discord app asset URL
        if (imageUrl && !imageUrl.startsWith('http') && activity.application_id) {
            // Try app-assets first (for Rich Presence images)
            const appAssetUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${imageUrl}.png`;
            console.log("🏗️ Constructed app asset URL:", appAssetUrl);
            return appAssetUrl;
        }

        console.log("✅ Using URL as-is:", imageUrl);
        return imageUrl;
    };

    const largeImage = getImageUrl(activity.assets?.large_image);
    
    console.log("🖼️ Final image URL to load:", largeImage);
    console.log("📱 Activity details:", {
        name: activity.name,
        applicationId: activity.application_id,
        largeImageAsset: activity.assets?.large_image,
        smallImageAsset: activity.assets?.small_image,
        allAssets: activity.assets
    });

    return <div className="flex items-center">
        <img 
            src={largeImage} 
            alt={activity.name || "Activity status"} 
            className="w-16 h-16 rounded-lg mr-2"
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.log("❌ Image failed to load:", target.src);
                
                // Try alternative Discord asset URLs before falling back to placeholder
                if (target.src.includes('/app-assets/') && activity.application_id && activity.assets?.large_image) {
                    const altUrl = `https://cdn.discordapp.com/app-icons/${activity.application_id}/${activity.assets.large_image}.png`;
                    console.log("🔄 Trying app-icons URL:", altUrl);
                    target.src = altUrl;
                } else if (target.src.includes('/app-icons/') && activity.application_id && activity.assets?.large_image) {
                    const altUrl = `https://cdn.discordapp.com/attachments/${activity.application_id}/${activity.assets.large_image}`;
                    console.log("🔄 Trying attachments URL:", altUrl);
                    target.src = altUrl;
                } else {
                    console.log("🔄 All attempts failed, using fallback image");
                    target.src = "https://i.postimg.cc/bNVjsFTQ/avatar.png";
                }
            }}
            onLoad={() => {
                console.log("✅ Image loaded successfully:", largeImage);
            }}
        />
        <div className="flex flex-col">
            <p className="text-sm font-bold text-theme-foreground dark:text-white">{activity.name}</p>
            <p className="text-xs text-theme-foreground-secondary dark:text-white/70">{trimToLength(activity.details || "", 55)}</p>
            <p className="text-xs text-theme-foreground-secondary dark:text-white/70">{trimToLength(activity.state || "", 55)}</p>
            <p className="text-xs text-theme-foreground-contrast dark:text-indigo-400 font-bold flex items-center gap-2 ">
                <Clock size={12} strokeWidth={3} />
                <span>{timestampToRelativeTime(activity.timestamps?.start!)}</span>
            </p>
        </div>
    </div>
}