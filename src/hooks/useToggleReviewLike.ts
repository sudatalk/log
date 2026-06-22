import { queryKeys } from "@/constants/queryKeys";
import { toggleReviewLike } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useToggleReviewLike(contentId: number, userId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: number) => toggleReviewLike(reviewId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.contents.reviews(contentId, userId),
      });
    },
  });
}
