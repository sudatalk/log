import {
  BG_SURFACE,
  BORDER,
  BORDER_SOLID,
  BORDER_STRONG,
  FLEX,
  FLEX_COL,
  FONT_SEMIBOLD,
  GAP_1,
  ITEMS_CENTER,
  JUSTIFY_BETWEEN,
  ROUNDED,
  TEXT_LG,
  TEXT_SM,
} from "@/constants/tailwind";
import clsx from "clsx";

import { Button } from "@/components/ui/button";
import Rating from "./LogCard/Rating";

const MySaveLogCard = () => {
  return (
    <div className={clsx(FLEX, FLEX_COL, BG_SURFACE, ROUNDED, BORDER, BORDER_SOLID, BORDER_STRONG, "gap-2.5", "p-2.5")}>
      <div className={clsx(FLEX, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
        <div className={clsx(FLEX, FLEX_COL, GAP_1)}>
          <div className={TEXT_LG}>1984</div>
          <div className={TEXT_SM}>헤르만 헤세</div>
        </div>
        <Rating />
      </div>
      <div className={clsx(FLEX, ITEMS_CENTER, "gap-[5px]")}></div>
      <p className={TEXT_SM}>{'“교육 제도의 억압성과 개인의 자유에 대한 깊은 성찰을 담은 작품"'}</p>
      <div className={clsx(FLEX, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
        <div />
        <Button className={clsx("px-5 h-8", FONT_SEMIBOLD)} size="sm">
          작성
        </Button>
      </div>
    </div>
  );
};

export default MySaveLogCard;
