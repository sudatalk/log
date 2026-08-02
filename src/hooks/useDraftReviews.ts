import { queryKeys } from "@/constants/queryKeys";
import { getDraftReviews } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useDraftReviews() {
  const query = useQuery({
    queryKey: queryKeys.reviews.drafts,
    queryFn: getDraftReviews,
  });

  return { ...query, drafts: query.data ?? [] };
}
