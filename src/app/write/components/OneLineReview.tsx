import { Input } from "@/components/ui/input";
import {
  BG_SURFACE,
  BG_WHITE,
  BORDER,
  BORDER_ACCENT,
  BORDER_SOLID,
  CENTER,
  FLEX,
  FLEX_COL,
  FONT_MEDIUM,
  REQUIRED,
  ROUNDED,
  TEXT_LG,
  TEXT_SM,
} from "@/constants/tailwind";
import clsx from "clsx";

type Props = {
  oneLine?: string;
  handleChangeOneLine: (value: string) => void;
};

const OneLineReview = (props: Props) => {
  const { oneLine, handleChangeOneLine } = props;

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
      <p className={clsx(TEXT_LG, REQUIRED)}>한줄평</p>
      <Input
        value={oneLine}
        maxLength={30}
        onChange={(v) => handleChangeOneLine(v.target.value)}
        className={clsx("p-5", ROUNDED, TEXT_SM, BG_WHITE)}
        placeholder="이 책을 한 문장으로 표현한다면 ?"
      />
    </div>
  );
};

export default OneLineReview;
