import { queryKeys } from "@/constants/queryKeys";
import { getSchedules } from "@/lib/api";
import { SchedulesResponse } from "@/types/api";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 20;

export function useSchedules() {
  const query = useInfiniteQuery<
    SchedulesResponse,
    Error,
    InfiniteData<SchedulesResponse, number>,
    readonly string[],
    number
  >({
    queryKey: queryKeys.schedules.all,
    initialPageParam: 0,
    queryFn: ({ pageParam }) => getSchedules({ size: PAGE_SIZE, page: pageParam }),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.number + 1;
      return nextPage < lastPage.totalPages ? nextPage : undefined;
    },
  });

  const schedules = query.data?.pages.flatMap((page) => page.content) ?? [];

  return { ...query, schedules };
}