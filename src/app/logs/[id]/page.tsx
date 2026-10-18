"use client";

import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { QueryHydrator } from "@/components/QueryHydrator";
import { BG_BASE, FLEX, FLEX_COL, FULL } from "@/constants/tailwind";
import clsx from "clsx";
import LogsContainer from "./components/LogsContainer";
import Logs from "./components/Logs";
import { useParams, useRouter } from "next/navigation";
import { getRoute, REDIRECT_URL_KEY } from "@/constants/router";
import useGetUserId from "@/hooks/useGetUserId";
import { useDraftReviews } from "@/hooks/useDraftReviews";
import { useMyReviews } from "@/hooks/useMyReviews";

export default function LogsPage() {
  const params = useParams();
  const bookId = Number(params["id"]);

  const router = useRouter();

  const { userId, isLoading } = useGetUserId();

  const isLogined = !!userId && !isLoading;

  const { reviews: myReviews } = useMyReviews(isLogined);
  const { drafts } = useDraftReviews(isLogined);

  const handleClickReviewButton = () => {
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
    <QueryHydrator>
      <div className={clsx(FULL, FLEX, BG_BASE, FLEX_COL)}>
        <Header />
        <LogsContainer>
          <Logs />
        </LogsContainer>
        <div className="sticky bottom-0 z-[5] shrink-0 bg-surface px-3 pb-3">
          <button
            className="flex h-12 w-full cursor-pointer items-center justify-center rounded-[4px] bg-amber px-7"
            onClick={handleClickReviewButton}
          >
            <span className="text-lg font-semibold leading-[21px] text-on-amber">리뷰 참여하기</span>
          </button>
        </div>
        <BottomNav />
      </div>
    </QueryHydrator>
  );
}
