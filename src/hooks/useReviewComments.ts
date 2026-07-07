import { queryKeys } from "@/constants/queryKeys";
import { getReviewComments } from "@/lib/api";
import type { ReviewCommentsResponse } from "@/types/api";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 20;

export function reviewCommentsQueryOptions(
  reviewId: number | undefined,
  enabled: boolean,
) {
  return {
    queryKey: queryKeys.reviews.comments(reviewId),
    initialPageParam: 0,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getReviewComments(reviewId!, { page: pageParam, size: PAGE_SIZE }),
    getNextPageParam: (lastPage: ReviewCommentsResponse) => {
      const nextPage = lastPage.number + 1;
      return nextPage < lastPage.totalPages ? nextPage : undefined;
    },
    enabled: enabled && reviewId !== undefined,
  };
}

export function useReviewComments(reviewId: number | undefined, enabled: boolean) {
  const query = useInfiniteQuery<
    ReviewCommentsResponse,
    Error,
    InfiniteData<ReviewCommentsResponse, number>,
    ReturnType<typeof queryKeys.reviews.comments>,
    number
  >(reviewCommentsQueryOptions(reviewId, enabled));

  const comments = query.data?.pages.flatMap((page) => page.content) ?? [];

  return { ...query, comments };
}
