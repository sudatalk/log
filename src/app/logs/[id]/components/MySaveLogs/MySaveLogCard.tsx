import { Button } from "@/components/ui/button";
import {
  ABSOLUTE,
  BG_SURFACE,
  BORDER,
  BORDER_SOLID,
  BORDER_STRONG,
  CENTER,
  FLEX,
  FLEX_1,
  FLEX_COL,
  FONT_SEMIBOLD,
  H_FULL,
  ITEMS_CENTER,
  ITEMS_END,
  JUSTIFY_BETWEEN,
  OBJECT_COVER,
  OVERFLOW_HIDDEN,
  RELATIVE,
  ROUNDED,
  TEXT_LG,
  TEXT_SM,
  TEXT_WHITE,
  TEXT_XS,
  W_FULL,
} from "@/constants/tailwind";
import clsx from "clsx";
import Image from "next/image";

const MySaveLogCard = () => {
  return (
    <div className={clsx(FLEX, "gap-2.5", "p-3.5", BORDER, BORDER_SOLID, BORDER_STRONG, ROUNDED, BG_SURFACE)}>
      <div className={clsx(RELATIVE, ROUNDED, OVERFLOW_HIDDEN, "w-[85px]")}>
        <Image className={clsx(ROUNDED, OBJECT_COVER)} fill sizes="85px" src="/full-dummy-image.png" alt="" />
        <div className={clsx(FLEX, CENTER, ABSOLUTE, "top-1", "right-0.5", "pr-1", "py-1")}>
          <div className={clsx(TEXT_XS, FONT_SEMIBOLD, TEXT_WHITE)}>D - 7</div>
        </div>
      </div>
      <div className={clsx(FLEX, FLEX_1, FLEX_COL, W_FULL)}>
        <div className={TEXT_LG}>1984</div>
        <div className={TEXT_SM}>헤르만 헤세</div>
        <div className={clsx(FLEX, JUSTIFY_BETWEEN, ITEMS_CENTER, W_FULL)}>
          <div className={clsx(TEXT_XS, H_FULL, FLEX, ITEMS_END)} style={{ verticalAlign: "bottom" }}>
            2026. 3. 8. 저장
          </div>
          <Button className="px-5 h-8" size="xs">
            작성
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MySaveLogCard;
