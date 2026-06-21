import {
  BG_SURFACE,
  BORDER,
  BORDER_SOLID,
  BORDER_STRONG,
  CENTER,
  FLEX,
  FLEX_8,
  FLEX_COL,
  FONT_SEMIBOLD,
  GAP_2,
  ROUNDED,
  TEXT_GRAY,
  TEXT_XS,
} from "@/constants/tailwind";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const Free = () => {
  return (
    <div className={clsx(FLEX, ROUNDED, BORDER, BORDER_SOLID, BORDER_STRONG, "p-3.5", "gap-2.5", BG_SURFACE, CENTER)}>
      <img src="/svg/free-question-badge.svg" />
      <div className={clsx(FLEX, FLEX_COL, FLEX_8, GAP_2)}>
        <p className={clsx(FONT_SEMIBOLD)}>자유롭게 작성하기</p>
        <p className={clsx(TEXT_XS, TEXT_GRAY)}>자유로운 형식으로 리뷰를 작성해보세요</p>
      </div>
      <ChevronDown />
    </div>
  );
};

export default Free;
