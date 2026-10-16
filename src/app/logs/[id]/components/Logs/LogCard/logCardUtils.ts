import { CardType } from "./types/card";

export type ReviewContent = {
  shortComment: string;
  questions: Array<{ question?: string; answer?: string }>;
  quotes: Array<{ quote?: string; reason?: string | null }>;
  comment?: string;
};

const hasText = (value?: string | null) => !!value?.trim();

export const hasOneLineContent = (shortComment?: string | null) =>
  hasText(shortComment);

export const hasRecommendContent = (
  questions: ReviewContent["questions"] = [],
) => questions.some((item) => hasText(item.answer));

export const hasImpressiveContent = (
  quotes: ReviewContent["quotes"] = [],
) => quotes.some((item) => hasText(item.quote));

export const hasFreeContent = (comment?: string | null) => hasText(comment);

export const getAvailableTypes = (review: ReviewContent) => {
  const types: string[] = [];

  if (hasOneLineContent(review.shortComment)) types.push(CardType.ONE_LINE);
  if (hasRecommendContent(review.questions)) types.push(CardType.RECOMMEND);
  if (hasImpressiveContent(review.quotes)) types.push(CardType.IMPRESSIVE);
  if (hasFreeContent(review.comment)) types.push(CardType.FREE);

  return types;
};

export type LogBadgeItem = {
  type: string;
  bgColor: string;
  color: string;
  svg: string;
  label: string;
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
