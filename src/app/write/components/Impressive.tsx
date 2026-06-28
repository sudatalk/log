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

const Impressive = () => {
  return (
    <div className={clsx(FLEX, ROUNDED, BORDER, BORDER_SOLID, BORDER_STRONG, "p-3.5", "gap-2.5", BG_SURFACE, CENTER)}>
      <img src="/svg/impressive-question-badge.svg" />
      <div className={clsx(FLEX, FLEX_COL, FLEX_8, GAP_2)}>
        <p className={clsx(FONT_SEMIBOLD)}>인상깊었던 문장</p>
        <p className={clsx(TEXT_XS, TEXT_GRAY)}>기억에 남는 구절을 공유해보세요</p>
      </div>
      <ChevronDown />
    </div>
  );
};

export default Impressive;
