import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants/queryKeys";
import { getContentDetail } from "@/lib/api";

export function contentDetailQueryOptions(
  contentId: number | undefined,
  userId: number | undefined,
) {
  return {
    queryKey: queryKeys.contents.detail(contentId, userId),
    queryFn: () => getContentDetail(contentId!, userId!),
    enabled: contentId !== undefined && userId !== undefined,
  };
}

export function useContentDetail(
  contentId: number | undefined,
  userId: number | undefined,
) {
  return useQuery(contentDetailQueryOptions(contentId, userId));
}
