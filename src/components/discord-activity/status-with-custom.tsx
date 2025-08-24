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

// Status icon function removed as it's currently unused
// TODO: Implement status display if needed

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

  // Status variable removed as it's currently unused
  // const status = activity?.discord_status as "online" | "idle" | "dnd" | "offline" | undefined;

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
