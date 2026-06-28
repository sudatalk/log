import { Button } from "@/components/ui/button";
import { CENTER, FLEX, FLEX_1, GAP_5, ROUNDED, TEXT_XL, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";

const WriteReviewButton = () => {
  return (
    <div className={clsx(FLEX, W_FULL, CENTER, GAP_5)}>
      <Button className={clsx("h-10 p-6 bg-[#333333] w-40", ROUNDED)} size="lg">
        <span className={clsx(TEXT_XL)}>임시저장</span>
      </Button>
      <Button className={clsx("h-10 p-6 bg-[#348352] w-40", ROUNDED)} size="lg">
        <span className={clsx(TEXT_XL)}>작성하기</span>
      </Button>
    </div>
  );
};

export default WriteReviewButton;
