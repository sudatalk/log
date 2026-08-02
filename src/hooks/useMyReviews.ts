import { queryKeys } from "@/constants/queryKeys";
import { getMyReviews } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useMyReviews() {
  const query = useQuery({
    queryKey: queryKeys.reviews.my,
    queryFn: getMyReviews,
  });

  return { ...query, reviews: query.data ?? [] };
}
