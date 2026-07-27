import { queryKeys } from "@/constants/queryKeys";
import { getContentLikeStatus, getContentLikes } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export function useContentLikeStatus(contentId: number | undefined, enabled = true) {
  return useQuery({
    queryKey: queryKeys.contents.like(contentId),
    queryFn: () => getContentLikeStatus(contentId!),
    enabled: enabled && contentId !== undefined && !Number.isNaN(contentId),
  });
}

export function useContentLikes(contentIds: number[]) {
  const sortedIds = useMemo(
    () => [...new Set(contentIds)].sort((a, b) => a - b),
    [contentIds],
  );

  return useQuery({
    queryKey: queryKeys.contents.likes(sortedIds),
    queryFn: () => getContentLikes(sortedIds),
    enabled: sortedIds.length > 0,
  });
}
