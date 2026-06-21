import { Input } from "@/components/ui/input";
import {
  BG_SURFACE,
  BORDER,
  BORDER_ACCENT,
  BORDER_SOLID,
  CENTER,
  FLEX,
  FLEX_COL,
  ROUNDED,
  TEXT_LG,
} from "@/constants/tailwind";
import clsx from "clsx";

const OneLineReview = () => {
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
      )}
    >
      <p className={TEXT_LG}>한줄평</p>
      <Input className={clsx("p-5", ROUNDED)} placeholder="이 책을 한 문장으로 표현한다면 ?" />
    </div>
  );
};

export default OneLineReview;
