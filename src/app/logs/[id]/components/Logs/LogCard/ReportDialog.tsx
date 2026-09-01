"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { FONT_SEMIBOLD } from "@/constants/tailwind";
import type { ReportReason } from "@/types/api";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const REPORT_REASONS: { value: ReportReason; label: string }[] = [
  { value: "ABUSE", label: "욕설/비방" },
  { value: "SPAM", label: "스팸/광고" },
  { value: "SEXUAL", label: "음란/선정적" },
  { value: "FLOOD", label: "도배" },
  { value: "PRIVACY", label: "개인정보 노출" },
  { value: "ETC", label: "기타" },
];

type Props = {
  isOpen: boolean;
  title?: string;
  onConfirm: (reason: ReportReason) => void;
  onCancel: () => void;
  isPending?: boolean;
};

const ReportDialog = ({
  isOpen,
  title = "리뷰 신고",
  onConfirm,
  onCancel,
  isPending = false,
}: Props) => {
  const [reason, setReason] = useState<ReportReason>("ABUSE");

  useEffect(() => {
    if (!isOpen) return;

    setReason("ABUSE");

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
        role="dialog"
        aria-modal="true"
        aria-labelledby="report-dialog-title"
        className="relative z-10 w-full max-w-[320px] rounded-2xl border border-line bg-white p-5 shadow-[0px_8px_24px_rgba(38,38,38,0.16)]"
      >
        <h2 id="report-dialog-title" className={clsx("text-base text-ink", FONT_SEMIBOLD)}>
          {title}
        </h2>
        <p className="mt-2 text-sm leading-5 text-ink-muted">
          신고 사유를 선택해주세요.
        </p>

        <div className="mt-4 flex flex-col gap-2" role="radiogroup" aria-label="신고 사유">
          {REPORT_REASONS.map(({ value, label }) => (
            <label
              key={value}
              className={clsx(
                "flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors",
                reason === value
                  ? "border-amber bg-amber/10 text-ink"
                  : "border-line text-ink-muted hover:bg-black/5",
              )}
            >
              <input
                type="radio"
                name="report-reason"
                value={value}
                checked={reason === value}
                onChange={() => setReason(value)}
                className="sr-only"
              />
              {label}
            </label>
          ))}
        </div>

        <ButtonGroup className="mt-5 w-full [&>[data-slot=button]]:flex-1">
          <Button
            variant="outline"
            className={clsx("h-9", FONT_SEMIBOLD)}
            onClick={onCancel}
            disabled={isPending}
          >
            취소
          </Button>
          <Button
            variant="destructive"
            className={clsx("h-9", FONT_SEMIBOLD)}
            onClick={() => onConfirm(reason)}
            disabled={isPending}
          >
            신고
          </Button>
        </ButtonGroup>
      </div>
    </div>,
    document.body,
  );
};

export default ReportDialog;
