"use client";

import { Header } from "@/components/Header";
import { BG_BASE, FLEX, FLEX_1, FLEX_COL, FULL, GAP_3, GAP_5, H_FULL, P_3, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";
import WriteReviewButton from "./components/WriteReviewButton";
import BookInfo from "./components/BookInfo";
import OneLineReview from "./components/OneLineReview";
import StarReview from "./components/StarReview";
import Recommend from "./components/Recommend";
import Impressive from "./components/Impressive";
import Free from "./components/Free";
import useReview from "./hooks/useReview";

const book = {
  id: 1,
  categoryType: "BOOK",
  title: "사피엔스",
  description: "인류의 역사를 새로운 시각으로 조명한 책",
  coverImageUrl: "https://image.yes24.com/goods/257435/XL",
  author: "유발 하라리",
  publisher: "김영사",
  isbn: "9788934972464",
  director: null,
  runtimeMinutes: null,
  liked: true,
  reviewCount: 2,
  likeCount: 1,
  averageRating: 4.5,
};

const ReviewWritePage = () => {
  const {
    review,
    handleChangeOneLine,
    handleChangeStar,
    handleChangeRecommend,
    handleChangeImpressiveSentence,
    handleChangeImpressiveImpression,
    handleChangeFree,

    isRequired,
  } = useReview();

  return (
    <div className={clsx(FULL, FLEX, BG_BASE, FLEX_COL, H_FULL)}>
      <Header />
      <div className={clsx(FLEX, FLEX_COL, FULL, P_3, GAP_3, FLEX_1)}>
        <div className={clsx(FLEX, FLEX_1, W_FULL, FLEX_COL, GAP_5)}>
          <BookInfo
            author={book.author}
            title={book.title}
            description={book.description}
            coverImageUrl={book.coverImageUrl}
            endedAt={"2026-06-23T00:00:00"}
          />
          <OneLineReview oneLine={review.oneLine} handleChangeOneLine={handleChangeOneLine} />
          <StarReview star={review.star} handleChangeStar={handleChangeStar} />
          <div className={clsx(FLEX, GAP_3, FLEX_COL)}>
            <Recommend recommend={review.recommend} handleChangeRecommend={handleChangeRecommend} />
            <Impressive
              sentence={review.impressive.sentence}
              impression={review.impressive.impression}
              handleChangeImpressiveSentence={handleChangeImpressiveSentence}
              handleChangeImpressiveImpression={handleChangeImpressiveImpression}
            />
            <Free free={review.free} handleChangeFree={handleChangeFree} />
          </div>
        </div>
        <WriteReviewButton disabled={isRequired} />
      </div>
    </div>
  );
};

export default ReviewWritePage;
