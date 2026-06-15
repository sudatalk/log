import { FLEX, W_FULL } from "@/constants/tailwind";
import type { ReviewListItem } from "@/types/api";
import clsx from "clsx";
import { CardType } from "../types/card";
import Free from "./Free";
import Impressive from "./Impressive";
import OneLine from "./OneLine";
import Recommend from "./Recommend";

type Props = {
  type: string;
  review: ReviewListItem;
};

const Description = ({ type, review }: Props) => {
  return (
    <div className={clsx(FLEX, W_FULL)}>
      {type === CardType.ONE_LINE && <OneLine shortComment={review.shortComment} />}
      {type === CardType.RECOMMEND && <Recommend questions={review.questions} />}
      {type === CardType.IMPRESSIVE && <Impressive quotes={review.quotes} />}
      {type === CardType.FREE && <Free comment={review.comment} />}
    </div>
  );
};

export default Description;
