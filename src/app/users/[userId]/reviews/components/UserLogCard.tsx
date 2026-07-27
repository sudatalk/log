"use client";

import Description from "@/app/logs/[id]/components/Logs/LogCard/Description";
import LogBadgeRow from "@/app/logs/[id]/components/Logs/LogCard/LogBadgeRow";
import LogCardBookHeader from "@/app/logs/[id]/components/Logs/LogCard/LogCardBookHeader";
import LogCardFooter from "@/app/logs/[id]/components/Logs/LogCard/LogCardFooter";
import LogCardShell from "@/app/logs/[id]/components/Logs/LogCard/LogCardShell";
import ReviewCommentSheet from "@/app/logs/[id]/components/Logs/LogCard/ReviewCommentSheet";
import { useCardTypeSelection } from "@/app/logs/[id]/components/Logs/LogCard/useCardTypeSelection";
import useGetUserId from "@/hooks/useGetUserId";
import { useToggleReviewLike } from "@/hooks/useToggleReviewLike";
import type { UserReviewResponse } from "@/types/api";
import { useState } from "react";

type Props = {
  review: UserReviewResponse;
};

const UserLogCard = ({ review }: Props) => {
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

export default UserLogCard;
