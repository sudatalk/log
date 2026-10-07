"use client";

import { getRoute, REDIRECT_URL_KEY } from "@/constants/router";
import { useDraftReviews } from "@/hooks/useDraftReviews";
import useGetUserId from "@/hooks/useGetUserId";
import { useMyReviews } from "@/hooks/useMyReviews";
import { useRouter } from "next/navigation";

export function ReviewCTA({ bookId, daysLeft }: { bookId?: number; daysLeft: number }) {
  const router = useRouter();

  const { userId, isLoading } = useGetUserId();

  const isLogined = !!userId && !isLoading;

  const { reviews: myReviews } = useMyReviews(isLogined);
  const { drafts } = useDraftReviews(isLogined);

  const hnadleClickReviewButton = () => {
    if (!bookId) return;

    const writePath = getRoute.write({ bookId });

    if (!isLogined) {
      router.push(getRoute.login({ [REDIRECT_URL_KEY]: writePath }));
      return;
    }

    const published = myReviews.find((review) => review.contentId === bookId);
    if (published) {
      router.push(
        getRoute.write({
          bookId,
          reviewId: published.reviewId,
        }),
      );
      return;
    }

    const draft = drafts.find((item) => item.contentId === bookId);
    if (draft) {
      router.push(
        getRoute.write({
          bookId,
          reviewId: draft.reviewId,
        }),
      );
      return;
    }

    router.push(writePath);
  };

  return (
    <div className="flex flex-col items-center gap-1 self-stretch border-t border-[#DDDCDB] pt-3">
      <p className="text-[11px] font-light leading-[13px] text-ink-muted">
        리뷰 마감까지 <span className="font-semibold text-ink">{daysLeft}일</span> 남았습니다
      </p>
      <button
        onClick={hnadleClickReviewButton}
        className="flex h-12 w-full cursor-pointer items-center justify-center rounded-[4px] bg-amber px-7"
      >
        <span className="text-lg font-semibold leading-[21px] text-on-amber">리뷰 참여하기</span>
      </button>
    </div>
  );
}
