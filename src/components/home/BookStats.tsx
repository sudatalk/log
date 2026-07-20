import { Heart, PenLine, Star } from "lucide-react";
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
  liked,
  likeCount,
  reviewCount,
  averageRating,
  onClickHeart,
}: {
  liked: boolean;
  likeCount: number;
  reviewCount: number;
  averageRating: number | null;
  onClickHeart?: () => void;
}) {
  return (
    <div className="flex items-center gap-[5px] self-stretch py-1">
      <span className={`flex items-center gap-[5px] ${onClickHeart ? "cursor-pointer" : ""}`}>
        <Heart
          className={`size-[18px] ${onClickHeart ? "cursor-pointer" : "text-ink-muted"}`}
          strokeWidth={2}
          onClick={onClickHeart}
          color={liked ? "#ef4444" : undefined}
          fill={liked ? "#ef4444" : "none"}
        />
        <span className="text-xs font-medium tracking-[0.2px] text-ink-muted">{likeCount}</span>
      </span>
      <Stat icon={PenLine} value={reviewCount} />
      {averageRating && <Stat icon={Star} value={averageRating} />}
    </div>
  );
}
