import { queryKeys } from "@/constants/queryKeys";
import { getDraftReviews } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useDraftReviews(enabled = true) {
  const query = useQuery({
    queryKey: queryKeys.reviews.drafts,
    queryFn: getDraftReviews,
    enabled,
  });

  return { ...query, drafts: query.data ?? [] };
}
