"use client";

import { openExternalUrl } from "@/lib/openExternalUrl";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";

type Props = {
  purchaseUrl?: string | null;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** 목록처럼 공간이 좁을 때는 icon, 홈/상세는 label */
  variant?: "label" | "icon";
};

/** 쿠팡 파트너스 등 외부 구매 링크. purchaseUrl이 있으면 새 창으로 연다. */
export function BookPurchaseChip({
  purchaseUrl,
  className,
  onClick,
  variant = "label",
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick?.(e);
    if (purchaseUrl) {
      openExternalUrl(purchaseUrl);
    }
  };

  if (variant === "icon") {
    return (
      <button
        type="button"
        aria-label="구매"
        onClick={handleClick}
        className={clsx(
          "inline-flex shrink-0 items-center justify-center p-0 text-ink",
          className,
        )}
      >
        <ShoppingCart size={14} strokeWidth={2} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        "inline-flex h-7 shrink-0 items-center rounded-full border border-[#C4B4A4] bg-[#FDFAF4] px-3",
        "text-xs font-medium leading-[14px] text-ink",
        className,
      )}
    >
      구매
    </button>
  );
}
