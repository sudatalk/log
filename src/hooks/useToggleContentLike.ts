import { queryKeys } from "@/constants/queryKeys";
import { toggleContentLike } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useToggleContentLike(userId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contentId: number) => toggleContentLike(contentId, userId),
    onSuccess: (_data, contentId) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.contents.detail(contentId, userId),
      });
    },
  });
}
