"use client";

import Emoji from "@/components/shared/Emoji";
import {
  BG_SURFACE,
  BORDER,
  BORDER_SOLID,
  BORDER_STRONG,
  FLEX,
  FLEX_COL,
  ITEMS_CENTER,
  JUSTIFY_BETWEEN,
  ROUNDED,
  W_FULL,
} from "@/constants/tailwind";
import type { ReviewListItem } from "@/types/api";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { useToggleReviewLike } from "@/hooks/useToggleReviewLike";
import Description from "./Description";
import LogBadge from "./LogBadge";
import LogCardHeader from "./LogCardHeader";
import LogCardMenu from "./LogCardMenu";
import Rating from "./Rating";
import ReviewCommentSheet from "./ReviewCommentSheet";
import { CardType } from "./types/card";
import useGetUserId from "@/hooks/useGetUserId";

const LOG_BADGE = (selectedType: string) => [
  {
    type: CardType.ONE_LINE,
    bgColor: selectedType === CardType.ONE_LINE ? "#fb4b0033" : "transparent",
    color: "#fb4b00",
    svg: "/svg/one-line-full.svg",
    label: "한줄평",
  },
  {
    type: CardType.RECOMMEND,
    bgColor: selectedType === CardType.RECOMMEND ? "#7e22ce33" : "transparent",
    color: "#7e22ce",
    svg: "/svg/ai-question-full.svg",
    label: "추천 질문",
  },
  {
    type: CardType.IMPRESSIVE,
    bgColor: selectedType === CardType.IMPRESSIVE ? "#1d4ed833" : "transparent",
    color: "#1d4ed8",
    svg: "/svg/impressive-sentence-full.svg",
    label: "인상 문장",
  },
  {
    type: CardType.FREE,
    bgColor: selectedType === CardType.FREE ? "#15803d33" : "transparent",
    color: "#15803d",
    svg: "/svg/free-review-full.svg",
    label: "자유 리뷰",
  },
];

const getAvailableTypes = (review: ReviewListItem) => {
  const types: string[] = [];

  if (review.shortComment) types.push(CardType.ONE_LINE);
  if (review.questions.length > 0) types.push(CardType.RECOMMEND);
  if (review.quotes.length > 0) types.push(CardType.IMPRESSIVE);
  if (review.comment) types.push(CardType.FREE);

  return types;
};

type Props = {
  review: ReviewListItem;
  contentId: number;
};

const LogCard = ({ review, contentId }: Props) => {
  const { userId } = useGetUserId();

  const isMyReview = review.userId === userId;
  const { mutate: toggleLike, isPending: isTogglingLike } = useToggleReviewLike(contentId);
  const availableTypes = useMemo(() => getAvailableTypes(review), [review]);
  const [selectedType, setSelectedType] = useState(availableTypes[0] ?? CardType.ONE_LINE);
  const [isCommentSheetOpen, setIsCommentSheetOpen] = useState(false);
  const badges = LOG_BADGE(selectedType).filter((badge) => availableTypes.includes(badge.type));

  const handleClickBadge = (value: string) => {
    setSelectedType(value);
  };

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
      <div
        className={clsx(
          FLEX,
          FLEX_COL,
          W_FULL,
          BG_SURFACE,
          ROUNDED,
          BORDER,
          BORDER_SOLID,
          BORDER_STRONG,
          "gap-2.5",
          "p-2.5",
        )}
      >
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
        {(badges.length > 0 || review.rating > 0) && (
          <div className={clsx(FLEX, W_FULL, ITEMS_CENTER, JUSTIFY_BETWEEN, "gap-2.5")}>
            {badges.length > 0 ? (
              <div className={clsx(FLEX, ITEMS_CENTER, "gap-[5px]")}>
                {badges.map((badge) => (
                  <LogBadge key={badge.label} {...badge} onClickBadge={handleClickBadge} />
                ))}
              </div>
            ) : (
              <div />
            )}
            <Rating value={review.rating} />
          </div>
        )}

        {availableTypes.includes(selectedType) && <Description type={selectedType} review={review} />}

        <Emoji
          heartCount={review.likeCount}
          isLiked={review.isLiked}
          handleClickHeart={handleClickHeart}
          messageCount={review.commentCount}
          handleClickMessage={handleClickMessage}
        />
      </div>

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
