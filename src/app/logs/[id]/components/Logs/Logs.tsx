"use client";

import BookCard from "@/app/books/components/Books/BookCard/BookCard";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { FLEX, FLEX_COL, W_FULL } from "@/constants/tailwind";
import { useContentDetail } from "@/hooks/useContentDetail";
import { useContentReviews } from "@/hooks/useContentReviews";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import clsx from "clsx";
import { useParams } from "next/navigation";
import LogCard from "./LogCard";

const Logs = () => {
  const params = useParams<{ id: string }>();
  const contentId = Number(params.id);
  const { data: content, isPending: isContentPending, isError: isContentError } = useContentDetail(contentId);
  const {
    reviews,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending: isReviewsPending,
    isError: isReviewsError,
  } = useContentReviews(contentId);

  const sentinelRef = useInfiniteScroll({
    onIntersect: () => {
      fetchNextPage();
    },
    enabled: hasNextPage && !isFetchingNextPage,
  });

  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", "py-2.5", W_FULL)}>
      {isContentPending && <Loading />}
      {isContentError && <Error />}
      {content && <BookCard book={content} />}
      <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
        {isReviewsPending && <Loading />}
        {isReviewsError && <Error />}
        {reviews.map((review) => (
          <LogCard key={review.reviewId} review={review} contentId={contentId} />
        ))}
        {hasNextPage && <div ref={sentinelRef} aria-hidden />}
        {isFetchingNextPage && <Loading />}
      </div>
    </div>
  );
};

export default Logs;
