"use client";

import { Heart, Pen, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

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
  contentId,
  liked,
  likeCount,
  reviewCount,
  averageRating,
  onClickHeart,
}: {
  contentId: number;
  liked: boolean;
  likeCount: number;
  reviewCount: number;
  averageRating: number | null;
  onClickHeart?: () => void;
}) {
  const handleClickHeart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClickHeart?.();
  };

  return (
    <div className="flex items-center gap-[5px] self-stretch py-1">
      <span
        className={`flex items-center gap-[5px] ${onClickHeart ? "cursor-pointer" : ""}`}
        onClick={onClickHeart ? handleClickHeart : undefined}
      >
        <Heart
          className={`size-[18px] ${onClickHeart ? "cursor-pointer" : "text-ink-muted"}`}
          strokeWidth={2}
          color={liked ? "#ef4444" : undefined}
          fill={liked ? "#ef4444" : "none"}
        />
        <span className="text-xs font-medium tracking-[0.2px] text-ink-muted">
          {likeCount}
        </span>
      </span>
      <Link
        href={`/logs/${contentId}`}
        className="flex items-center gap-[5px] cursor-pointer"
      >
        <Pen className="size-[18px] text-ink-muted" strokeWidth={2} />
        <span className="text-xs font-medium tracking-[0.2px] text-ink-muted">
          {reviewCount}
        </span>
      </Link>
      {averageRating && <Stat icon={Star} value={averageRating} />}
    </div>
  );
}
