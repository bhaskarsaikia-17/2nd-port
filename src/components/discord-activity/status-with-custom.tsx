import type { LanyardData } from "react-use-lanyard"
import { useMemo } from "react"

type LanyardActivity = {
  id: string;
  name: string;
  type: number;
  state?: string;
  details?: string;
  emoji?: { id?: string | null; name?: string; animated?: boolean };
};

const getStatusIcon = (status: string | undefined) => {
  switch (status) {
    case "online":
      return (
        <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      );
    case "idle":
      return (
        <svg className="w-3 h-3 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20z"/>
        </svg>
      );
    case "dnd":
      return (
        <svg className="w-3 h-3 text-red-500" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15" stroke="white" strokeWidth="2"/>
          <line x1="9" y1="9" x2="15" y2="15" stroke="white" strokeWidth="2"/>
        </svg>
      );
    case "offline":
      return (
        <svg className="w-3 h-3 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fillOpacity="0.3"/>
          <circle cx="12" cy="12" r="6" fill="currentColor"/>
        </svg>
      );
    default:
      return (
        <svg className="w-3 h-3 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fillOpacity="0.3"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      );
  }
};

export function StatusWithCustom({ activity }: { activity: LanyardData }) {
  const customStatus = useMemo(() => {
    const act = activity?.activities?.find(a => a.type === 4) as
      | (LanyardActivity & { emoji?: { id?: string | null; name?: string } })
      | undefined;
    return {
      text: act?.state ?? "",
      emoji: act?.emoji?.id
        ? `https://cdn.discordapp.com/emojis/${act.emoji.id}${act.emoji.animated ? ".gif" : ".png"}`
        : act?.emoji?.name ?? "",
    };
  }, [activity]);

  const status = activity?.discord_status as "online" | "idle" | "dnd" | "offline" | undefined;

  return (
    <div className="flex items-center gap-2">
      {/* Custom Status */}
      {(customStatus.text || customStatus.emoji) && (
        <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 rounded-full px-2 py-1 border border-black/10 dark:border-white/10">
          {customStatus.emoji && (
            customStatus.emoji.startsWith("http") ? (
              <img 
                src={customStatus.emoji} 
                alt="" 
                className="w-3 h-3" 
              />
            ) : (
              <span className="text-xs">{customStatus.emoji}</span>
            )
          )}
          {customStatus.text && (
            <span className="text-xs text-theme-foreground dark:text-gray-200 font-medium">
              {customStatus.text}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// Crafted With ❤️ By Bhaskar
