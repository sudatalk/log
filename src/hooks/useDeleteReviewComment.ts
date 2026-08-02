import { queryKeys } from "@/constants/queryKeys";
import { deleteReviewComment } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteReviewComment(reviewId: number, contentId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => deleteReviewComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.reviews.comments(reviewId) });
      queryClient.invalidateQueries({
        queryKey: queryKeys.contents.reviews(contentId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.reviews.my,
      });
    },
  });
}
