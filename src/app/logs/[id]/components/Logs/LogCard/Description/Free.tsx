import { Textarea } from "@/components/ui/textarea";
import { FLEX, FLEX_COL, FONT_MEDIUM, OVERFLOW_HIDDEN, ROUNDED, TEXT_SM, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";

type Props = {
  comment: string;
};

const Free = ({ comment }: Props) => {
  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", ROUNDED, OVERFLOW_HIDDEN, W_FULL)}>
      <Textarea
        className={clsx(FONT_MEDIUM, TEXT_SM)}
        value={comment}
        disabled
        style={{ opacity: 1, backgroundColor: "#15803d33" }}
      />
    </div>
  );
};

export default Free;
