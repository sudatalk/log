"use client";

import LogCard from "@/app/logs/[id]/components/Logs/LogCard/LogCard";
import LogCardBookHeader from "@/app/logs/[id]/components/Logs/LogCard/LogCardBookHeader";
import type { ReviewListItem } from "@/types/api";

export type MyReviewCardData = {
  contentId: number;
  title: string;
  author: string;
  review: ReviewListItem;
};

type Props = {
  item: MyReviewCardData;
};

const MyReviewCard = ({ item }: Props) => {
  const { contentId, title, author, review } = item;

  return (
    <LogCard
      review={review}
      contentId={contentId}
      header={<LogCardBookHeader title={title} author={author} rating={review.rating} />}
      footerAction={
        <button
          type="button"
          className="h-6 shrink-0 rounded bg-[#D4894A] px-3.5 text-xs font-medium text-[#FEFEFF]"
        >
          수정
        </button>
      }
      showRatingInBadgeRow={false}
      interactive={false}
    />
  );
};

export default MyReviewCard;
