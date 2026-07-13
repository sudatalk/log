"use client";

import Error from "@/components/Error";
import Loading from "@/components/Loading";
import {
  FLEX,
  FLEX_COL,
  FONT_SEMIBOLD,
  GAP_3,
  TEXT_SM,
  TEXT_XL,
  W_FULL,
} from "@/constants/tailwind";
import { useDraftReviews } from "@/hooks/useDraftReviews";
import { useMyReviews } from "@/hooks/useMyReviews";
import clsx from "clsx";
import DraftReviewCard from "./DraftReviewCard";
import MyLogCard from "./MyLogCard";

const MyReviews = () => {
  const { drafts, isPending: isDraftsPending, isError: isDraftsError } = useDraftReviews();
  const { reviews, isPending: isMyReviewsPending, isError: isMyReviewsError } = useMyReviews();

  return (
    <div className={clsx(FLEX, FLEX_COL, GAP_3, W_FULL)}>
      <section className={clsx(FLEX, FLEX_COL, "gap-2.5 py-2.5")}>
        <h2 className={clsx(FONT_SEMIBOLD, TEXT_XL, "text-ink")}>작성중인 리뷰</h2>
        <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
          {isDraftsPending && <Loading />}
          {isDraftsError && <Error message="작성중인 리뷰를 불러오지 못했습니다." />}
          {!isDraftsPending && !isDraftsError && drafts.length === 0 && (
            <p className={clsx(TEXT_SM, "py-4 text-center text-ink-muted")}>
              작성중인 리뷰가 없습니다.
            </p>
          )}
          {!isDraftsPending &&
            !isDraftsError &&
            drafts.map((draft) => <DraftReviewCard key={draft.reviewId} draft={draft} />)}
        </div>
      </section>

      <section className={clsx(FLEX, FLEX_COL, "gap-2.5 py-2.5")}>
        <h2 className={clsx(FONT_SEMIBOLD, TEXT_XL, "text-ink")}>내 리뷰</h2>
        <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
          {isMyReviewsPending && <Loading />}
          {isMyReviewsError && <Error message="내 리뷰를 불러오지 못했습니다." />}
          {!isMyReviewsPending && !isMyReviewsError && reviews.length === 0 && (
            <p className={clsx(TEXT_SM, "py-4 text-center text-ink-muted")}>
              작성 완료한 리뷰가 없습니다.
            </p>
          )}
          {!isMyReviewsPending &&
            !isMyReviewsError &&
            reviews.map((review) => <MyLogCard key={review.reviewId} review={review} />)}
        </div>
      </section>
    </div>
  );
};

export default MyReviews;
