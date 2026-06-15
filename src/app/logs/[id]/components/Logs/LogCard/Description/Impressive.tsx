import { Textarea } from "@/components/ui/textarea";
import { FLEX, FLEX_COL, FONT_MEDIUM, OVERFLOW_HIDDEN, ROUNDED, TEXT_SM, W_FULL } from "@/constants/tailwind";
import type { ReviewQuoteItem } from "@/types/api";
import clsx from "clsx";

type Props = {
  quotes: ReviewQuoteItem[];
};

const Impressive = ({ quotes }: Props) => {
  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", ROUNDED, OVERFLOW_HIDDEN, W_FULL)}>
      {quotes.map((item) => (
        <div key={item.id} className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
          <div className={TEXT_SM}>인상깊었던 문장</div>
          <Textarea
            className={clsx(FONT_MEDIUM, TEXT_SM)}
            value={item.quote}
            disabled
            style={{ opacity: 1, backgroundColor: "#1d4ed833" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Impressive;
