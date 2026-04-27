import { Textarea } from "@/components/ui/textarea";
import { FLEX, FLEX_COL, FONT_MEDIUM, OVERFLOW_HIDDEN, ROUNDED, TEXT_SM, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";

const Recommend = () => {
  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", ROUNDED, OVERFLOW_HIDDEN, W_FULL)}>
      <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
        <div className={clsx(W_FULL, "py-2", "px-2.5", FLEX, ROUNDED, OVERFLOW_HIDDEN, "bg-[#7e22ce33]")}>
          <p className={clsx(FONT_MEDIUM, TEXT_SM)}>이 책에서 가장 공감했던 인물은 누구이며, 그 이유는 무엇인가요?</p>
        </div>
        <Textarea
          className={clsx(FONT_MEDIUM, TEXT_SM)}
          value="이 책에서 가장 공감했던 인물은 홍길동 입니다."
          disabled
          style={{ opacity: 1, backgroundColor: "white" }}
        />
      </div>
    </div>
  );
};

export default Recommend;
