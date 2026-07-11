"use client";

import {
  FLEX,
  FLEX_COL,
  FONT_SEMIBOLD,
  GAP_3,
  TEXT_XL,
  W_FULL,
} from "@/constants/tailwind";
import type { ReviewListItem } from "@/types/api";
import clsx from "clsx";
import DraftReviewCard, { type DraftReviewCardData } from "./DraftReviewCard";
import MyReviewCard, { type MyReviewCardData } from "./MyReviewCard";

const DRAFT_REVIEWS: DraftReviewCardData[] = [
  {
    title: "1984",
    author: "조지 오웰",
    coverImageUrl: "https://image.yes24.com/goods/257435/XL",
    savedAt: "2026. 03. 08",
    daysLeft: 7,
  },
  {
    title: "1984",
    author: "조지 오웰",
    coverImageUrl: "https://image.yes24.com/goods/257435/XL",
    savedAt: "2026. 03. 08",
  },
];

const createMockReview = (reviewId: number): ReviewListItem => ({
  reviewId,
  userId: 1,
  nickname: "나",
  profileImageUrl: "",
  comment: "",
  shortComment: "교육 제도의 억압성과 개인의 자유에 대한 깊은 성찰을 담은 작품",
  rating: 4,
  isLiked: false,
  likeCount: 21,
  commentCount: 4,
  quotes: [{ id: 1, quote: "인상 깊은 문장", sequence: 1 }],
  questions: [{ id: 1, question: "이 책에서 가장 인상 깊었던 장면은?", sequence: 1, answer: "답변" }],
  createdAt: "2026-03-08T00:00:00",
});

const MY_REVIEWS: MyReviewCardData[] = [1, 2, 3].map((reviewId) => ({
  contentId: 32,
  title: "1984",
  author: "조지 오웰",
  review: createMockReview(reviewId),
}));

const MyReviews = () => {
  return (
    <div className={clsx(FLEX, FLEX_COL, GAP_3, W_FULL)}>
      <section className={clsx(FLEX, FLEX_COL, "gap-2.5 py-2.5")}>
        <h2 className={clsx(FONT_SEMIBOLD, TEXT_XL, "text-ink")}>작성중인 리뷰</h2>
        <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
          {DRAFT_REVIEWS.map((draft, index) => (
            <DraftReviewCard key={`draft-${index}`} draft={draft} />
          ))}
        </div>
      </section>

      <section className={clsx(FLEX, FLEX_COL, "gap-2.5 py-2.5")}>
        <h2 className={clsx(FONT_SEMIBOLD, TEXT_XL, "text-ink")}>내 리뷰</h2>
        <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
          {MY_REVIEWS.map((item) => (
            <MyReviewCard key={item.review.reviewId} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyReviews;
