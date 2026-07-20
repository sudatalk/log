import { FLEX, FLEX_COL, OVERFLOW_HIDDEN, ROUNDED, TEXT_SM, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";

type Props = {
  shortComment: string;
};

const OneLine = ({ shortComment }: Props) => {
  return (
    <div className={clsx(FLEX, FLEX_COL, ROUNDED, OVERFLOW_HIDDEN, W_FULL)}>
      <p
        className={clsx(TEXT_SM, "rounded-lg px-2.5 py-2")}
        style={{ backgroundColor: "#fb4b0033" }}
      >
        {`"${shortComment}"`}
      </p>
    </div>
  );
};

export default OneLine;
