import { FLEX, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";
import {
  hasFreeContent,
  hasImpressiveContent,
  hasOneLineContent,
  hasRecommendContent,
} from "../logCardUtils";
import { CardType } from "../types/card";
import Free from "./Free";
import Impressive from "./Impressive";
import OneLine from "./OneLine";
import Recommend from "./Recommend";

type DescriptionQuestion = {
  id: number;
  question: string;
  answer: string;
};

type DescriptionQuote = {
  id: number;
  quote: string;
  reason?: string | null;
};

type Props = {
  type: string;
  review: {
    shortComment: string;
    comment?: string;
    questions: DescriptionQuestion[];
    quotes: DescriptionQuote[];
  };
};

const Description = ({ type, review }: Props) => {
  const questions = review.questions.filter((item) => item.answer.trim());
  const quotes = review.quotes.filter((item) => item.quote.trim());

  return (
    <div className={clsx(FLEX, W_FULL)}>
      {type === CardType.ONE_LINE && hasOneLineContent(review.shortComment) && (
        <OneLine shortComment={review.shortComment} />
      )}
      {type === CardType.RECOMMEND && hasRecommendContent(questions) && (
        <Recommend questions={questions} />
      )}
      {type === CardType.IMPRESSIVE && hasImpressiveContent(quotes) && (
        <Impressive quotes={quotes} />
      )}
      {type === CardType.FREE && hasFreeContent(review.comment) && (
        <Free comment={review.comment!} />
      )}
    </div>
  );
};

export default Description;
