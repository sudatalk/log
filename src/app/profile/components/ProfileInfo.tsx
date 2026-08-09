import {
  BG_SURFACE,
  CENTER,
  FLEX,
  FLEX_COL,
  FONT_SEMIBOLD,
  JUSTIFY_AROUND,
  ROUNDED,
  TEXT_GRAY,
  TEXT_SM,
  TEXT_XL,
} from "@/constants/tailwind";
import { useMyReviews } from "@/hooks/useMyReviews";
import clsx from "clsx";

const ProfileInfo = () => {
  const { data: reviews } = useMyReviews();

  const readBookCount = reviews?.length || 0;

  const likeCount =
    reviews?.reduce((acc, review) => acc + review.likeCount, 0) || 0;

  const commentCount =
    reviews?.reduce((acc, review) => acc + review.commentCount, 0) || 0;

  return (
    <div
      className={clsx(FLEX, BG_SURFACE, ROUNDED, JUSTIFY_AROUND, "h-[70px]")}
    >
      <div className={clsx(FLEX, CENTER, FLEX_COL)}>
        <p className={clsx(TEXT_XL, FONT_SEMIBOLD)}>{readBookCount}</p>
        <p className={clsx(TEXT_SM, TEXT_GRAY)}>읽은 책</p>
      </div>

      <div className={clsx(FLEX, CENTER, FLEX_COL)}>
        <p className={clsx(TEXT_XL, FONT_SEMIBOLD)}>{likeCount}</p>
        <p className={clsx(TEXT_SM, TEXT_GRAY)}>받은 좋아요</p>
      </div>

      <div className={clsx(FLEX, CENTER, FLEX_COL)}>
        <p className={clsx(TEXT_XL, FONT_SEMIBOLD)}>{commentCount}</p>
        <p className={clsx(TEXT_SM, TEXT_GRAY)}>받은 코멘트</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
