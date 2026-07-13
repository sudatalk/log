"use client";

import type { ReviewListItem } from "@/types/api";
import { useState } from "react";
import { useToggleReviewLike } from "@/hooks/useToggleReviewLike";
import Description from "./Description";
import LogBadgeRow from "./LogBadgeRow";
import LogCardFooter from "./LogCardFooter";
import LogCardHeader from "./LogCardHeader";
import LogCardMenu from "./LogCardMenu";
import LogCardShell from "./LogCardShell";
import Rating from "./Rating";
import ReviewCommentSheet from "./ReviewCommentSheet";
import { useCardTypeSelection } from "./useCardTypeSelection";
import useGetUserId from "@/hooks/useGetUserId";

type Props = {
  review: ReviewListItem;
  contentId: number;
};

const LogCard = ({ review, contentId }: Props) => {
  const { userId } = useGetUserId();
  const currentUserId = Number(userId);

  const isMyReview = review.userId === userId;
  const { mutate: toggleLike, isPending: isTogglingLike } = useToggleReviewLike(contentId);
  const { availableTypes, selectedType, badges, handleClickBadge } = useCardTypeSelection(review);
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

  const showBadgeRow = badges.length > 0 || review.rating > 0;

  return (
    <>
      <LogCardShell>
        <LogCardHeader
          nickname={review.nickname}
          profileImageUrl={review.profileImageUrl}
          createdAt={review.createdAt}
          action={
            <LogCardMenu
              reviewId={review.reviewId}
              contentId={contentId}
              userId={currentUserId}
              isMyReview={isMyReview}
            />
          }
        />
        {showBadgeRow && (
          <LogBadgeRow
            badges={badges}
            onClickBadge={handleClickBadge}
            trailing={<Rating value={review.rating} />}
          />
        )}

        {availableTypes.includes(selectedType) && <Description type={selectedType} review={review} />}

        <LogCardFooter
          heartCount={review.likeCount}
          isLiked={review.isLiked}
          handleClickHeart={handleClickHeart}
          messageCount={review.commentCount}
          handleClickMessage={handleClickMessage}
        />
      </LogCardShell>

      <ReviewCommentSheet
        reviewId={review.reviewId}
        contentId={contentId}
        userId={currentUserId}
        isOpen={isCommentSheetOpen}
        onClose={() => setIsCommentSheetOpen(false)}
      />
    </>
  );
};

export default LogCard;
