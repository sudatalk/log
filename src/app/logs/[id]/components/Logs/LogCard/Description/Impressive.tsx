import { Textarea } from "@/components/ui/textarea";
import { FLEX, FLEX_COL, FONT_MEDIUM, OVERFLOW_HIDDEN, ROUNDED, TEXT_SM, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";

const Impressive = () => {
  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", ROUNDED, OVERFLOW_HIDDEN, W_FULL)}>
      <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
        <div className={TEXT_SM}>인상깊었던 문장</div>
        <Textarea
          className={clsx(FONT_MEDIUM, TEXT_SM)}
          value="이 책에서 가장 인상깊었던 문장은 홍길동 입니다."
          disabled
          style={{ opacity: 1, backgroundColor: "#1d4ed833" }}
        />
        <div className={TEXT_SM}>인상깊었던 이유</div>
        <Textarea
          className={clsx(FONT_MEDIUM, TEXT_SM)}
          value="이 문장이 가장 인상깊었던 이유는 홍길동 입니다."
          disabled
          style={{ opacity: 1, backgroundColor: "white" }}
        />
      </div>
    </div>
  );
};

export default Impressive;
