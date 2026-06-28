import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants/queryKeys";
import { getContentDetail } from "@/lib/api";

export function contentDetailQueryOptions(contentId: number | undefined) {
  return {
    queryKey: queryKeys.contents.detail(contentId),
    queryFn: () => getContentDetail(contentId!),
    enabled: contentId !== undefined,
  };
}

export function useContentDetail(contentId: number | undefined) {
  return useQuery(contentDetailQueryOptions(contentId));
}
