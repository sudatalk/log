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
  free: string;
  handleChangeFree: (value: string) => void;
};

const Free = (props: Props) => {
  const { free, handleChangeFree } = props;

  const { isOpen, handleToggle } = useDisclosure(true);

  return (
    <div className={clsx(FLEX, FLEX_COL, ROUNDED, BORDER, BORDER_SOLID, BORDER_STRONG, "p-3.5", GAP_2, BG_SURFACE)}>
      <div className={clsx(FLEX, CENTER, W_FULL, GAP_2)} onClick={handleToggle}>
        <img src="/svg/free-question-badge.svg" />
        <div className={clsx(FLEX, FLEX_COL, FLEX_8, GAP_1)}>
          <p className={clsx(FONT_SEMIBOLD)}>자유롭게 작성하기</p>
          <p className={clsx(TEXT_XS, TEXT_GRAY)}>자유로운 형식으로 리뷰를 작성해보세요</p>
        </div>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </div>
      {isOpen && (
        <div className={clsx(FLEX, FLEX_COL, W_FULL, GAP_2)}>
          <Textarea
            value={free}
            onChange={(e) => handleChangeFree(e.target.value)}
            placeholder="책에 대한 생각을 자유롭게 작성해주세요"
            className={clsx(ROUNDED, FONT_SEMIBOLD, TEXT_SM, BG_WHITE)}
            style={{ minHeight: 80 }}
          />
        </div>
      )}
    </div>
  );
};

export default Free;
