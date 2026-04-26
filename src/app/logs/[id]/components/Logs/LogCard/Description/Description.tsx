import { FLEX, W_FULL } from "@/constants/tailwind";
import { CardType } from "../types/card";
import OneLine from "./OneLine";
import Recommend from "./Recommend";
import clsx from "clsx";
import Impressive from "./Impressive";
import Free from "./Free";

type Props = {
  type: string;
};

const Description = (props: Props) => {
  const { type } = props;

  return (
    <div className={clsx(FLEX, W_FULL)}>
      {type === CardType.ONE_LINE && <OneLine />}
      {type === CardType.RECOMMEND && <Recommend />}
      {type === CardType.IMPRESSIVE && <Impressive />}
      {type === CardType.FREE && <Free />}
    </div>
  );
};

export default Description;
