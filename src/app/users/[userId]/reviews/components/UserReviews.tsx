"use client";

import Error from "@/components/Error";
import Loading from "@/components/Loading";
import {
  FLEX,
  FLEX_COL,
  FONT_SEMIBOLD,
  TEXT_SM,
  TEXT_XL,
  W_FULL,
} from "@/constants/tailwind";
import { useUserReviews } from "@/hooks/useUserReviews";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import UserLogCard from "./UserLogCard";

type Props = {
  userId: number;
};

const UserReviews = ({ userId }: Props) => {
  const searchParams = useSearchParams();
  const nickname = searchParams.get("nickname");
  const { reviews, isPending, isError } = useUserReviews(userId);
  const title = nickname ? `${nickname}님의 리뷰` : "리뷰";

  return (
    <div className={clsx(FLEX, FLEX_COL, W_FULL)}>
      <section className={clsx(FLEX, FLEX_COL, "gap-2.5 py-2.5")}>
        <h2 className={clsx(FONT_SEMIBOLD, TEXT_XL, "text-ink")}>{title}</h2>
        <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
          {isPending && <Loading />}
          {isError && <Error message="리뷰를 불러오지 못했습니다." />}
          {!isPending && !isError && reviews.length === 0 && (
            <p className={clsx(TEXT_SM, "py-4 text-center text-ink-muted")}>
              작성 완료한 리뷰가 없습니다.
            </p>
          )}
          {!isPending &&
            !isError &&
            reviews.map((review) => <UserLogCard key={review.reviewId} review={review} />)}
        </div>
      </section>
    </div>
  );
};

export default UserReviews;
