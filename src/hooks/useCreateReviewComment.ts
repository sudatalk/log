import { queryKeys } from "@/constants/queryKeys";
import { createReviewComment } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateReviewComment(
  reviewId: number,
  userId: number,
  contentId: number,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) => createReviewComment(reviewId, userId, { content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.reviews.comments(reviewId) });
      queryClient.invalidateQueries({
        queryKey: queryKeys.contents.reviews(contentId),
      });
    },
  });
}
