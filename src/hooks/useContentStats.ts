import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants/queryKeys";
import { getContentStats } from "@/lib/api";

export function contentStatsQueryOptions(contentId: number | undefined) {
  return {
    queryKey: queryKeys.contents.stats(contentId),
    queryFn: () => getContentStats(contentId!),
    enabled: contentId !== undefined,
  };
}

export function useContentStats(contentId: number | undefined) {
  return useQuery(contentStatsQueryOptions(contentId));
}
