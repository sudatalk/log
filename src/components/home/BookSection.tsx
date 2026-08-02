"use client";

import { BookDetail } from "@/components/home/BookDetail";
import { useContentDetail } from "@/hooks/useContentDetail";
import { useContentLikeStatus } from "@/hooks/useContentLikes";
import { useCurrentSchedules } from "@/hooks/useCurrentSchedules";
import { useToggleContentLike } from "@/hooks/useToggleContentLike";
import { CategoryType } from "@/types/api";

export function BookSection() {
  const { data: schedules } = useCurrentSchedules();
  const book = schedules?.find((s) => s.categoryType === CategoryType.BOOK);
  const { data: content } = useContentDetail(book?.contentId);
  const { data: likeStatus } = useContentLikeStatus(book?.contentId);
  const { mutate: toggleLike, isPending: isTogglingLike } =
    useToggleContentLike();

  if (!book) return null;

  const handleClickHeart = () => {
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
