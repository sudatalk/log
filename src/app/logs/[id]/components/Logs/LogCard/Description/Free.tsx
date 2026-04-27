import { Textarea } from "@/components/ui/textarea";
import { FLEX, FLEX_COL, FONT_MEDIUM, OVERFLOW_HIDDEN, ROUNDED, TEXT_SM, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";

const Free = () => {
  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", ROUNDED, OVERFLOW_HIDDEN, W_FULL)}>
      <Textarea
        className={clsx(FONT_MEDIUM, TEXT_SM)}
        value="책에 대한 내 자유로운 생각입니다."
        disabled
        style={{ opacity: 1, backgroundColor: "white" }}
      />
    </div>
  );
};

export default Free;
