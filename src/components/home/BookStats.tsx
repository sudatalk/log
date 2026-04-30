import { Heart, MessageCircle, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function Stat({ icon: Icon, value }: { icon: LucideIcon; value: string | number }) {
  return (
    <span className="flex items-center gap-[5px]">
      <Icon className="size-[18px] text-ink-muted" />
      <span className="text-xs font-medium tracking-[0.2px] text-ink-muted">
        {value}
      </span>
    </span>
  );
}

export function BookStats({
  likeCount,
  reviewCount,
  averageRating,
}: {
  likeCount: number;
  reviewCount: number;
  averageRating: number | null;
}) {
  return (
    <div className="flex items-center gap-[5px] self-stretch py-1">
      <Stat icon={Heart} value={likeCount} />
      <Stat icon={MessageCircle} value={reviewCount} />
      {averageRating && <Stat icon={Star} value={averageRating} />}
    </div>
  );
}
