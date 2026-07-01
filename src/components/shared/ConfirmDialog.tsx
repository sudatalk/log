"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { FONT_SEMIBOLD } from "@/constants/tailwind";
import clsx from "clsx";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isPending?: boolean;
};

const ConfirmDialog = ({
  isOpen,
  title,
  description,
  confirmLabel = "확인",
  cancelLabel = "취소",
  onConfirm,
  onCancel,
  isPending = false,
}: Props) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="닫기"
        className="absolute inset-0 bg-black/40"
        onClick={onCancel}
      />
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        aria-describedby={description ? "confirm-dialog-description" : undefined}
        className="relative z-10 w-full max-w-[320px] rounded-2xl border border-line bg-white p-5 shadow-[0px_8px_24px_rgba(38,38,38,0.16)]"
      >
        <h2 id="confirm-dialog-title" className={clsx("text-base text-ink", FONT_SEMIBOLD)}>
          {title}
        </h2>
        {description && (
          <p id="confirm-dialog-description" className="mt-2 text-sm leading-5 text-ink-muted">
            {description}
          </p>
        )}
        <ButtonGroup className="mt-5 w-full [&>[data-slot=button]]:flex-1">
          <Button
            variant="outline"
            className={clsx("h-9", FONT_SEMIBOLD)}
            onClick={onCancel}
            disabled={isPending}
          >
            {cancelLabel}
          </Button>
          <Button
            variant="destructive"
            className={clsx("h-9", FONT_SEMIBOLD)}
            onClick={onConfirm}
            disabled={isPending}
          >
            {confirmLabel}
          </Button>
        </ButtonGroup>
      </div>
    </div>,
    document.body,
  );
};

export default ConfirmDialog;
