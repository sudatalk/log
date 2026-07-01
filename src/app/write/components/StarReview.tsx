import {
  BG_SURFACE,
  BORDER,
  BORDER_ACCENT,
  BORDER_SOLID,
  CENTER,
  FLEX,
  FLEX_COL,
  FONT_MEDIUM,
  GAP_5,
  REQUIRED,
  ROUNDED,
  TEXT_LG,
} from "@/constants/tailwind";
import clsx from "clsx";
import { Star } from "lucide-react";

type Props = {
  star: number;
  handleChangeStar: (value: number) => void;
};

const StarReview = (props: Props) => {
  const { star, handleChangeStar } = props;

  return (
    <div
      className={clsx(
        FLEX,
        ROUNDED,
        BORDER,
        BORDER_SOLID,
        BORDER_ACCENT,
        "p-3.5",
        "gap-2.5",
        BG_SURFACE,
        CENTER,
        FLEX_COL,
        FONT_MEDIUM,
      )}
    >
      <p className={clsx(TEXT_LG, REQUIRED)}>별점을 선택해주세요</p>
      <div className={clsx(FLEX, GAP_5)}>
        {Array.from({ length: 5 }).map((_, index) => {
          const currentIndex = index + 1;

          const isChecked = currentIndex <= star;

          const strokeWidth = isChecked ? 0 : 1.5;

          const fill = isChecked ? "yellow" : "white";

          return <Star key={index} strokeWidth={strokeWidth} fill={fill} onClick={() => handleChangeStar(index + 1)} />;
        })}
      </div>
    </div>
  );
};

export default StarReview;
