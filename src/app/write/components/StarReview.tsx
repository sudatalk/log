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
  ROUNDED,
  TEXT_LG,
} from "@/constants/tailwind";
import clsx from "clsx";
import { Star } from "lucide-react";

const StarReview = () => {
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
      <p className={TEXT_LG}>별점을 선택해주세요</p>
      <div className={clsx(FLEX, GAP_5)}>
        <Star size={33} strokeWidth={1.5} />
        <Star size={33} strokeWidth={1.5} />
        <Star size={33} strokeWidth={1.5} />
        <Star size={33} strokeWidth={1.5} />
        <Star size={33} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default StarReview;
