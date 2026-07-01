import { queryKeys } from "@/constants/queryKeys";
import { deleteReview } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteReview(contentId: number, userId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: number) => deleteReview(reviewId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.contents.reviews(contentId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.contents.detail(contentId, userId),
      });
    },
  });
}
