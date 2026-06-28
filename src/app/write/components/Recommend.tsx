import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BG_BASE,
  BG_SURFACE,
  BORDER,
  BORDER_ACCENT,
  BORDER_SOLID,
  BORDER_STRONG,
  CENTER,
  FLEX,
  FLEX_8,
  FLEX_COL,
  FONT_MEDIUM,
  FONT_SEMIBOLD,
  GAP_1,
  GAP_2,
  ROUNDED,
  TEXT_GRAY,
  TEXT_SM,
  TEXT_XS,
  W_FULL,
} from "@/constants/tailwind";
import useDisclosure from "@/hooks/useDisclosure";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  recommend: string;
  handleChangeRecommend: (value: string) => void;
};

const Recommend = (props: Props) => {
  const { recommend, handleChangeRecommend } = props;

  const { isOpen, handleToggle } = useDisclosure(true);

  return (
    <div className={clsx(FLEX, FLEX_COL, ROUNDED, BORDER, BORDER_SOLID, BORDER_STRONG, "p-3.5", GAP_2, BG_SURFACE)}>
      <div className={clsx(FLEX, CENTER, W_FULL, GAP_2)} onClick={handleToggle}>
        <img src="/svg/ai-question-badge.svg" />
        <div className={clsx(FLEX, FLEX_COL, FLEX_8, GAP_1)}>
          <p className={clsx(FONT_SEMIBOLD)}>추천 질문에 답하기</p>
          <p className={clsx(TEXT_XS, TEXT_GRAY)}>AI 가 생성한 질문에 답해보세요</p>
        </div>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </div>
      {isOpen && (
        <div className={clsx(FLEX, FLEX_COL, W_FULL, GAP_2)}>
          <div className={clsx(ROUNDED, "p-2", "bg-[#ec4899]/20", FONT_SEMIBOLD, TEXT_SM)}>
            이 책에서 가장 공감했던 인물은 누구이며, 그 이유는 무엇인가요?
          </div>
          <Textarea
            value={recommend}
            onChange={(e) => handleChangeRecommend(e.target.value)}
            placeholder="추천 질문에 답변을 작성해주세요"
            className={clsx(ROUNDED, FONT_SEMIBOLD, TEXT_SM)}
            style={{ minHeight: 80 }}
          />
        </div>
      )}
    </div>
  );
};

export default Recommend;
