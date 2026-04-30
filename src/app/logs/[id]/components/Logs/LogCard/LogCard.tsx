"use client";

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
  W_FULL,
} from "@/constants/tailwind";
import clsx from "clsx";
import Rating from "./Rating";
import LogBadge from "./LogBadge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CardType } from "./types/card";
import Description from "./Description";
import Emoji from "@/components/shared/Emoji";

const LOG_BADGE = (selectedType: string) => [
  {
    type: CardType.ONE_LINE,
    bgColor: selectedType === CardType.ONE_LINE ? "#fb4b0033" : "transparent",
    color: "#fb4b00",
    svg: "/svg/one-line-full.svg",
    label: "한줄평",
  },
  {
    type: CardType.RECOMMEND,
    bgColor: selectedType === CardType.RECOMMEND ? "#7e22ce33" : "transparent",
    color: "#7e22ce",
    svg: "/svg/ai-question-full.svg",
    label: "추천 질문",
  },
  {
    type: CardType.IMPRESSIVE,
    bgColor: selectedType === CardType.IMPRESSIVE ? "#1d4ed833" : "transparent",
    color: "#1d4ed8",
    svg: "/svg/impressive-sentence-full.svg",
    label: "인상 문장",
  },
  {
    type: CardType.FREE,
    bgColor: selectedType === CardType.FREE ? "#15803d33" : "transparent",
    color: "#15803d",
    svg: "/svg/free-review-full.svg",
    label: "자유 리뷰",
  },
];

const LogCard = () => {
  const [selectedType, setSelectedType] = useState(CardType.ONE_LINE);

  const handleClickBadge = (value: string) => {
    setSelectedType(value);
  };

  return (
    <div
      className={clsx(
        FLEX,
        FLEX_COL,
        W_FULL,
        BG_SURFACE,
        ROUNDED,
        BORDER,
        BORDER_SOLID,
        BORDER_STRONG,
        "gap-2.5",
        "p-2.5",
      )}
    >
      <div className={clsx(FLEX, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
        <div className={clsx(FLEX, FLEX_COL, GAP_1)}>
          <div className={TEXT_LG}>1984</div>
          <div className={TEXT_SM}>헤르만 헤세</div>
        </div>
        <Rating />
      </div>
      <div className={clsx(FLEX, ITEMS_CENTER, "gap-[5px]")}>
        {LOG_BADGE(selectedType).map((badge) => (
          <LogBadge key={badge.label} {...badge} onClickBadge={handleClickBadge} />
        ))}
      </div>

      <Description type={selectedType} />

      <div className={clsx(FLEX, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
        <Emoji heartCount={21} messageCount={5} />
        <Button className={clsx("px-5 h-8", FONT_SEMIBOLD)} size="sm">
          수정
        </Button>
      </div>
    </div>
  );
};

export default LogCard;
