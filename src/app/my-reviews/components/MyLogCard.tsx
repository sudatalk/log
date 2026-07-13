"use client";

import Description from "@/app/logs/[id]/components/Logs/LogCard/Description";
import LogBadgeRow from "@/app/logs/[id]/components/Logs/LogCard/LogBadgeRow";
import LogCardBookHeader from "@/app/logs/[id]/components/Logs/LogCard/LogCardBookHeader";
import LogCardFooter from "@/app/logs/[id]/components/Logs/LogCard/LogCardFooter";
import LogCardShell from "@/app/logs/[id]/components/Logs/LogCard/LogCardShell";
import ReviewCommentSheet from "@/app/logs/[id]/components/Logs/LogCard/ReviewCommentSheet";
import { useCardTypeSelection } from "@/app/logs/[id]/components/Logs/LogCard/useCardTypeSelection";
import { getRoute } from "@/constants/router";
import useGetUserId from "@/hooks/useGetUserId";
import { useToggleReviewLike } from "@/hooks/useToggleReviewLike";
import type { MyReviewResponse } from "@/types/api";
import Link from "next/link";
import { useState } from "react";

type Props = {
  review: MyReviewResponse;
};

const MyLogCard = ({ review }: Props) => {
  const { userId } = useGetUserId();
  const currentUserId = Number(userId);
  const { availableTypes, selectedType, badges, handleClickBadge } = useCardTypeSelection(review);
  const { mutate: toggleLike, isPending: isTogglingLike } = useToggleReviewLike(review.contentId);
  const [isCommentSheetOpen, setIsCommentSheetOpen] = useState(false);

  const handleClickHeart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isTogglingLike) return;

    toggleLike(review.reviewId);
  };

  const handleClickMessage = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCommentSheetOpen(true);
  };

  return (
    <>
      <LogCardShell>
        <LogCardBookHeader
          title={review.contentTitle}
          author={review.contentAuthor}
          rating={review.rating}
        />

        <LogBadgeRow badges={badges} onClickBadge={handleClickBadge} />

        {availableTypes.includes(selectedType) && <Description type={selectedType} review={review} />}

        <LogCardFooter
          heartCount={review.likeCount}
          handleClickHeart={handleClickHeart}
          messageCount={review.commentCount}
          handleClickMessage={handleClickMessage}
          action={
            <Link
              href={getRoute.write({ bookId: review.contentId, reviewId: review.reviewId })}
              className="flex h-6 shrink-0 items-center rounded bg-[#D4894A] px-3.5 text-xs font-medium text-[#FEFEFF]"
            >
              수정
            </Link>
          }
        />
      </LogCardShell>

      <ReviewCommentSheet
        reviewId={review.reviewId}
        contentId={review.contentId}
        userId={currentUserId}
        isOpen={isCommentSheetOpen}
        onClose={() => setIsCommentSheetOpen(false)}
      />
    </>
  );
};

export default MyLogCard;
