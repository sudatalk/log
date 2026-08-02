import { CardType } from "./types/card";

export type ReviewContent = {
  shortComment: string;
  questions: { length: number };
  quotes: { length: number };
  comment?: string;
};

export type LogBadgeItem = {
  type: string;
  bgColor: string;
  color: string;
  svg: string;
  label: string;
};

export const getAvailableTypes = (review: ReviewContent) => {
  const types: string[] = [];

  if (review.shortComment) types.push(CardType.ONE_LINE);
  if (review.questions.length > 0) types.push(CardType.RECOMMEND);
  if (review.quotes.length > 0) types.push(CardType.IMPRESSIVE);
  if (review.comment) types.push(CardType.FREE);

  return types;
};

export const getLogBadges = (selectedType: string): LogBadgeItem[] => [
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
