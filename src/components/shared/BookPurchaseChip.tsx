"use client";

import { Button } from "@/components/ui/button";
import { FONT_SEMIBOLD } from "@/constants/tailwind";
import { openExternalUrl } from "@/lib/openExternalUrl";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  purchaseUrl?: string | null;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** 목록처럼 공간이 좁을 때는 icon, 홈/상세는 label */
  variant?: "label" | "icon";
};

const DISCLOSURE =
  "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";

/** 쿠팡 파트너스 등 외부 구매 링크. 클릭 시 안내 후 새 창으로 연다. */
export function BookPurchaseChip({
  purchaseUrl,
  className,
  onClick,
  variant = "label",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick?.(e);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const handleConfirm = () => {
    setIsOpen(false);
    if (purchaseUrl) {
      openExternalUrl(purchaseUrl);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const dialog =
    isOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <button
          type="button"
          aria-label="닫기"
          className="absolute inset-0 bg-black/40"
          onClick={handleClose}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="purchase-disclosure-title"
          className="relative z-10 w-full max-w-[320px] rounded-2xl border border-line bg-white p-5 shadow-[0px_8px_24px_rgba(38,38,38,0.16)]"
        >
          <p
            id="purchase-disclosure-title"
            className="text-sm leading-[160%] text-ink"
          >
            {DISCLOSURE}
          </p>
          <Button
            className={clsx("mt-5 h-9 w-full cursor-pointer", FONT_SEMIBOLD)}
            onClick={handleConfirm}
          >
            확인
          </Button>
        </div>
      </div>,
      document.body,
    );

  if (variant === "icon") {
    return (
      <>
        <button
          type="button"
          aria-label="구매"
          onClick={handleClick}
          className={cn(
            "inline-flex size-[18px] shrink-0 cursor-pointer items-center justify-center p-0 text-ink",
            className,
          )}
        >
          <ShoppingCart className="size-full" strokeWidth={2} />
        </button>
        {dialog}
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "inline-flex h-7 shrink-0 cursor-pointer items-center rounded-full border border-[#C4B4A4] bg-[#FDFAF4] px-3",
          "text-xs font-medium leading-[14px] text-ink",
          className,
        )}
      >
        구매
      </button>
      {dialog}
    </>
  );
}
