import { Heart, MessageCircle, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function Stat({ icon: Icon, value }: { icon: LucideIcon; value: string | number }) {
  return (
    <span className="flex items-center gap-[4px]">
      <Icon className="size-[18px] text-ink-muted" />
      <span className="text-xs font-medium tracking-[0.2px] text-ink-muted">
        {value}
      </span>
    </span>
  );
}

export function BookStats({
  likes,
  comments,
  rating,
}: {
  likes: number;
  comments: number;
  rating: number;
}) {
  return (
    <div className="flex items-center gap-[12px] self-stretch py-1">
      <Stat icon={Heart} value={likes} />
      <Stat icon={MessageCircle} value={comments} />
      <Stat icon={Star} value={rating} />
    </div>
  );
}
