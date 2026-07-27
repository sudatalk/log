import { queryKeys } from "@/constants/queryKeys";
import { toggleContentLike } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useToggleContentLike() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contentId: number) => toggleContentLike(contentId),
    onSuccess: (_data, contentId) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.contents.like(contentId),
      });
      queryClient.invalidateQueries({
        queryKey: ["contents", "likes"],
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.schedules.all,
      });
    },
  });
}
