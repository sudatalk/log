import { Input } from "@/components/ui/input";
import {
  BG_SURFACE,
  BORDER,
  BORDER_ACCENT,
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

const Recommend = () => {
  return (
    <div className={clsx(FLEX, ROUNDED, BORDER, BORDER_SOLID, BORDER_STRONG, "p-3.5", "gap-2.5", BG_SURFACE, CENTER)}>
      <img src="/svg/ai-question-badge.svg" />
      <div className={clsx(FLEX, FLEX_COL, FLEX_8, GAP_2)}>
        <p className={clsx(FONT_SEMIBOLD)}>추천 질문에 답하기</p>
        <p className={clsx(TEXT_XS, TEXT_GRAY)}>AI 가 생성한 질문에 답해보세요</p>
      </div>
      <ChevronDown />
    </div>
  );
};

export default Recommend;
