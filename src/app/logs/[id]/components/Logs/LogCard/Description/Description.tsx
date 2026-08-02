import { FLEX, W_FULL } from "@/constants/tailwind";
import type { ReviewQuestionItem } from "@/types/api";
import clsx from "clsx";
import type { ReviewContent } from "../logCardUtils";
import { CardType } from "../types/card";
import Free from "./Free";
import Impressive from "./Impressive";
import OneLine from "./OneLine";
import Recommend from "./Recommend";

type Props = {
  type: string;
  review: ReviewContent & {
    questions: ReviewQuestionItem[];
    quotes: Array<{ id: number; quote: string; reason?: string | null }>;
  };
};

const Description = ({ type, review }: Props) => {
  return (
    <div className={clsx(FLEX, W_FULL)}>
      {type === CardType.ONE_LINE && <OneLine shortComment={review.shortComment} />}
      {type === CardType.RECOMMEND && <Recommend questions={review.questions} />}
      {type === CardType.IMPRESSIVE && <Impressive quotes={review.quotes} />}
      {type === CardType.FREE && review.comment && <Free comment={review.comment} />}
    </div>
  );
};

export default Description;
