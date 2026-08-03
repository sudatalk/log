"use client";

import { BookDetail } from "@/components/home/BookDetail";
import { getRoute, REDIRECT_URL_KEY } from "@/constants/router";
import { useContentDetail } from "@/hooks/useContentDetail";
import { useContentLikeStatus } from "@/hooks/useContentLikes";
import { useCurrentSchedules } from "@/hooks/useCurrentSchedules";
import useGetUserId from "@/hooks/useGetUserId";
import { useToggleContentLike } from "@/hooks/useToggleContentLike";
import { CategoryType } from "@/types/api";
import { usePathname, useRouter } from "next/navigation";

export function BookSection() {
  const router = useRouter();
  const pathname = usePathname();
  const { userId, isLoading } = useGetUserId();
  const isLogined = !!userId && !isLoading;

  const { data: schedules } = useCurrentSchedules();
  const book = schedules?.find((s) => s.categoryType === CategoryType.BOOK);
  const { data: content } = useContentDetail(book?.contentId);
  const { data: likeStatus } = useContentLikeStatus(book?.contentId);
  const { mutate: toggleLike, isPending: isTogglingLike } =
    useToggleContentLike();

  if (!book) return null;

  const handleClickHeart = () => {
    if (!isLogined) {
      router.push(getRoute.login({ [REDIRECT_URL_KEY]: pathname }));
      return;
    }
    if (isTogglingLike) return;
    toggleLike(book.contentId);
  };

  return (
    <BookDetail
      coverImageUrl={book.coverImageUrl}
      title={book.title}
      author={book.author}
      description={book.description}
      content={
        content
          ? {
              ...content,
              liked: likeStatus?.liked ?? false,
              likeCount: likeStatus?.likeCount ?? content.likeCount,
            }
          : undefined
      }
      onClickHeart={handleClickHeart}
    />
  );
}
