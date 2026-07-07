"use client";

import ConfirmDialog from "@/components/shared/ConfirmDialog";
import { useDeleteReview } from "@/hooks/useDeleteReview";
import clsx from "clsx";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {
  reviewId: number;
  contentId: number;
  userId: number;
  isMyReview: boolean;
};

const menuItemClassName =
  "flex w-full items-center px-3 py-2.5 text-left text-sm text-ink transition-colors hover:bg-black/5";

const LogCardMenu = ({ reviewId, contentId, userId, isMyReview }: Props) => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { mutate: deleteReview, isPending: isDeleting } = useDeleteReview(contentId, userId);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleEdit = () => {
    closeMenu();
    router.push(`/write/${reviewId}`);
  };

  const handleReport = () => {
    closeMenu();
  };

  const handleDelete = () => {
    closeMenu();
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteReview(reviewId, {
      onSettled: () => setIsDeleteDialogOpen(false),
    });
  };

  return (
    <>
      <div ref={menuRef} className="relative">
        <button
          type="button"
          aria-label="더보기"
          aria-expanded={isOpen}
          onClick={handleToggle}
          className="flex size-7 shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-black/5"
        >
          <MoreVertical size={16} strokeWidth={2} />
        </button>

        {isOpen && (
          <div
            className={clsx(
              "absolute top-full right-0 z-20 mt-1 min-w-[120px] overflow-hidden rounded-lg border border-line bg-white py-1",
              "shadow-[0px_4px_12px_rgba(38,38,38,0.12)]",
            )}
          >
            {isMyReview ? (
              <>
                <button type="button" className={menuItemClassName} onClick={handleEdit}>
                  수정
                </button>
                <button
                  type="button"
                  className={clsx(menuItemClassName, "text-destructive hover:bg-destructive/10")}
                  onClick={handleDelete}
                >
                  삭제
                </button>
              </>
            ) : (
              <button type="button" className={menuItemClassName} onClick={handleReport}>
                신고
              </button>
            )}
          </div>
        )}
      </div>

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        title="리뷰를 삭제할까요?"
        description="삭제한 리뷰는 복구할 수 없습니다."
        confirmLabel="삭제"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleteDialogOpen(false)}
        isPending={isDeleting}
      />
    </>
  );
};

export default LogCardMenu;
