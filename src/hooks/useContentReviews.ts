import { queryKeys } from "@/constants/queryKeys";
import { getContentReviews } from "@/lib/api";
import type { ContentReviewsResponse } from "@/types/api";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 20;

export function contentReviewsQueryOptions(contentId: number | undefined) {
  return {
    queryKey: queryKeys.contents.reviews(contentId),
    initialPageParam: 0,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getContentReviews(contentId!, { size: PAGE_SIZE, page: pageParam }),
    getNextPageParam: (lastPage: ContentReviewsResponse) => {
      const nextPage = lastPage.number + 1;
      return nextPage < lastPage.totalPages ? nextPage : undefined;
    },
    enabled: contentId !== undefined && !Number.isNaN(contentId),
  };
}

export function useContentReviews(contentId: number | undefined) {
  const query = useInfiniteQuery<
    ContentReviewsResponse,
    Error,
    InfiniteData<ContentReviewsResponse, number>,
    ReturnType<typeof queryKeys.contents.reviews>,
    number
  >(contentReviewsQueryOptions(contentId));

  const reviews = query.data?.pages.flatMap((page) => page.content) ?? [];

  return { ...query, reviews };
}
