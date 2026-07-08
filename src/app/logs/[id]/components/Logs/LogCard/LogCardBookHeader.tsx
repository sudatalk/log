import { FLEX, FLEX_COL, ITEMS_CENTER, JUSTIFY_BETWEEN, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";
import Rating from "./Rating";

type Props = {
  title: string;
  author: string;
  rating: number;
};

const LogCardBookHeader = ({ title, author, rating }: Props) => {
  return (
    <div className={clsx(FLEX, W_FULL, ITEMS_CENTER, JUSTIFY_BETWEEN, "gap-2.5")}>
      <div className={clsx(FLEX, FLEX_COL, "gap-1")}>
        <h3 className="text-lg font-medium leading-[21px] text-ink">{title}</h3>
        <p className="text-[11px] leading-[13px] tracking-[0.2px] text-ink">{author}</p>
      </div>
      <Rating value={rating} />
    </div>
  );
};

export default LogCardBookHeader;
