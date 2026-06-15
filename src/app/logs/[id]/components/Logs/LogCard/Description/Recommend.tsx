import { Textarea } from "@/components/ui/textarea";
import { FLEX, FLEX_COL, FONT_MEDIUM, OVERFLOW_HIDDEN, ROUNDED, TEXT_SM, W_FULL } from "@/constants/tailwind";
import type { ReviewQuestionItem } from "@/types/api";
import clsx from "clsx";

type Props = {
  questions: ReviewQuestionItem[];
};

const Recommend = ({ questions }: Props) => {
  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", ROUNDED, OVERFLOW_HIDDEN, W_FULL)}>
      {questions.map((item) => (
        <div key={item.id} className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
          <div className={clsx(W_FULL, "py-2", "px-2.5", FLEX, ROUNDED, OVERFLOW_HIDDEN, "bg-[#7e22ce33]")}>
            <p className={clsx(FONT_MEDIUM, TEXT_SM)}>{item.question}</p>
          </div>
          <Textarea
            className={clsx(FONT_MEDIUM, TEXT_SM)}
            value={item.answer}
            disabled
            style={{ opacity: 1, backgroundColor: "white" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Recommend;
