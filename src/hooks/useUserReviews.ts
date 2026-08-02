import { queryKeys } from "@/constants/queryKeys";
import { getUserReviews } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useUserReviews(userId: number | undefined) {
  const query = useQuery({
    queryKey: queryKeys.reviews.byUser(userId),
    queryFn: () => getUserReviews(userId!),
    enabled: userId !== undefined && !Number.isNaN(userId),
  });

  return { ...query, reviews: query.data ?? [] };
}
