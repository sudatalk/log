"use client";

import { getRoute, REDIRECT_URL_KEY } from "@/constants/router";
import useGetUserId from "@/hooks/useGetUserId";
import { useRouter } from "next/navigation";

export function ReviewCTA({ daysLeft }: { daysLeft: number }) {
  const router = useRouter();

  const { userId, isLoading } = useGetUserId();

  const isLogined = !!userId && !isLoading;

  const hnadleClickReviewButton = () => {
    if (!isLogined) {
      router.push(getRoute.login({ REDIRECT_URL_KEY: getRoute.write() }));
      return;
    }

    router.push(getRoute.write());
  };

  return (
    <div className="flex flex-col items-center gap-1 self-stretch">
      <p className="text-[11px] font-light leading-[13px] text-ink-muted">
        리뷰 마감까지{" "}
        <span className="font-semibold text-ink">{daysLeft}일</span> 남았습니다
      </p>
      <button
        onClick={hnadleClickReviewButton}
        className="flex h-12 w-full cursor-pointer items-center justify-center rounded-[4px] bg-amber px-7"
      >
        <span className="text-lg font-semibold leading-[21px] text-on-amber">
          리뷰 참여하기
        </span>
      </button>
    </div>
  );
}
