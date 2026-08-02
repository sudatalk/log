"use client";

import { Header } from "@/components/Header";
import {
  BG_BASE,
  FLEX,
  FLEX_1,
  FLEX_COL,
  FULL,
  GAP_3,
  GAP_5,
  H_FULL,
  OVERFLOW_AUTO,
  OVERFLOW_HIDDEN,
  P_3,
  W_FULL,
} from "@/constants/tailwind";
import clsx from "clsx";
import WriteReviewButton from "./components/WriteReviewButton";
import BookInfo from "./components/BookInfo";
import OneLineReview from "./components/OneLineReview";
import StarReview from "./components/StarReview";
import Recommend from "./components/Recommend";
import Impressive from "./components/Impressive";
import Free from "./components/Free";
import useReview from "./hooks/useReview";
import useWriteReview, { ReviewType } from "./hooks/useWriteReview";
import { useRouter, useSearchParams } from "next/navigation";
import { useContentDetail } from "@/hooks/useContentDetail";
import { getErrorData } from "@/utils/getErrorData";
import { toast } from "sonner";
import { getRoute } from "@/constants/router";

const BOOK_ID_SERACH_PARAMS_KEY = "bookId";

const ReviewWritePage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const bookId = searchParams.get(BOOK_ID_SERACH_PARAMS_KEY) || "";

  const { data: book } = useContentDetail(Number(bookId));

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

  const { mutateAsync: writeReview, isPending } = useWriteReview();

  const handleSubmitReview = async (type: ReviewType) => {
    if (isRequired || isPending || !book) return;

    try {
      const response = await writeReview({
        type,
        contentId: book.id,
        data: {
          shortComment: review.oneLine,
          rating: review.star.toString(),
          comment: review.free,
          quotes: [
            {
              quote: review.impressive.sentence,
              reason: review.impressive.impression,
            },
          ],
          questionAnswers: [
            {
              // TODO : 책의 정보에 추천 질문 고정 서버에서 받을 필요가 있음
              question:
                "이 책에서 가장 공감했던 인물은 누구이며, 그 이유는 무엇인가요?",
              answer: review.recommend,
            },
          ],
        },
      });

      const { reviewId } = response;

      if (!reviewId) return;

      router.replace(getRoute.write({ bookId: book.id, reviewId: reviewId }));
      return;
    } catch (error) {
      const { message } = getErrorData(error);

      toast(message);
    }
  };

  if (!book) return null;

  return (
    <div className={clsx(FULL, FLEX, BG_BASE, FLEX_COL, H_FULL)}>
      <Header />
      <div
        className={clsx(
          FLEX,
          FLEX_COL,
          FULL,
          P_3,
          GAP_3,
          FLEX_1,
          OVERFLOW_AUTO,
        )}
      >
        <div className={clsx(FLEX, FLEX_1, W_FULL, FLEX_COL, GAP_5)}>
          <BookInfo
            author={book.author}
            title={book.title}
            description={book.description}
            coverImageUrl={book.coverImageUrl}
          />
          <OneLineReview
            oneLine={review.oneLine}
            handleChangeOneLine={handleChangeOneLine}
          />
          <StarReview star={review.star} handleChangeStar={handleChangeStar} />
          <div className={clsx(FLEX, GAP_3, FLEX_COL)}>
            <Recommend
              recommend={review.recommend}
              handleChangeRecommend={handleChangeRecommend}
            />
            <Impressive
              sentence={review.impressive.sentence}
              impression={review.impressive.impression}
              handleChangeImpressiveSentence={handleChangeImpressiveSentence}
              handleChangeImpressiveImpression={
                handleChangeImpressiveImpression
              }
            />
            <Free free={review.free} handleChangeFree={handleChangeFree} />
          </div>
        </div>
      </div>
      <WriteReviewButton
        disabled={isRequired}
        handleSubmitReview={handleSubmitReview}
      />
    </div>
  );
};

export default ReviewWritePage;
