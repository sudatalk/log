import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BG_BASE,
  BG_SURFACE,
  BG_WHITE,
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
  sentence: string;
  impression: string;
  handleChangeImpressiveSentence: (value: string) => void;
  handleChangeImpressiveImpression: (value: string) => void;
};

const Impressive = (props: Props) => {
  const { sentence, impression, handleChangeImpressiveSentence, handleChangeImpressiveImpression } = props;

  const { isOpen, handleToggle } = useDisclosure(true);

  return (
    <div className={clsx(FLEX, FLEX_COL, ROUNDED, BORDER, BORDER_SOLID, BORDER_STRONG, "p-3.5", GAP_2, BG_SURFACE)}>
      <div className={clsx(FLEX, CENTER, W_FULL, GAP_2)} onClick={handleToggle}>
        <img src="/svg/impressive-question-badge.svg" />
        <div className={clsx(FLEX, FLEX_COL, FLEX_8, GAP_1)}>
          <p className={clsx(FONT_SEMIBOLD)}>인상깊었던 문장</p>
          <p className={clsx(TEXT_XS, TEXT_GRAY)}>기억에 남는 구절을 공유해보세요</p>
        </div>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </div>
      {isOpen && (
        <div className={clsx(FLEX, FLEX_COL, W_FULL, GAP_2)}>
          <Textarea
            value={sentence}
            onChange={(e) => handleChangeImpressiveSentence(e.target.value)}
            placeholder="책에서 인상깊었던 문장을 입력해주세요"
            className={clsx(ROUNDED, "bg-[#3B82F6]/20", FONT_SEMIBOLD, TEXT_SM)}
          />
          <Textarea
            value={impression}
            onChange={(e) => handleChangeImpressiveImpression(e.target.value)}
            placeholder="이 문장이 인상깊었던 이유를 설명해주세요"
            className={clsx(ROUNDED, FONT_SEMIBOLD, TEXT_SM, BG_WHITE)}
            style={{ minHeight: 80 }}
          />
        </div>
      )}
    </div>
  );
};

export default Impressive;
