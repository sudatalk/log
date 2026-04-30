"use client";

import { BookDetail } from "@/components/home/BookDetail";
import { useContentStats } from "@/hooks/useContentStats";
import { useCurrentSchedules } from "@/hooks/useCurrentSchedules";
import { CategoryType } from "@/types/api";

export function BookSection() {
  const { data: schedules } = useCurrentSchedules();
  const book = schedules?.find((s) => s.categoryType === CategoryType.BOOK);
  const { data: stats } = useContentStats(book?.contentId);

  if (!book || !stats) return null;

  return (
    <BookDetail
      coverImageUrl={book.coverImageUrl}
      title={book.title}
      author={book.author}
      description={book.description}
      likeCount={stats.likeCount}
      reviewCount={stats.reviewCount}
      averageRating={stats.averageRating}
    />
  );
}
