import { Header } from "@/components/Header";
import { BG_BASE, FLEX, FLEX_1, FLEX_COL, FULL, GAP_3, P_3 } from "@/constants/tailwind";
import clsx from "clsx";
import WriteReviewButton from "./components/WriteReviewButton";

const ReviewWritePage = () => {
  return (
    <div className={clsx(FULL, FLEX, BG_BASE, FLEX_COL)}>
      <Header />
      <div className={clsx(FLEX, FLEX_COL, FULL, P_3, GAP_3, FLEX_1)}>
        <div className={clsx(FLEX, FLEX_1)}>하이</div>
        <WriteReviewButton />
      </div>
    </div>
  );
};

export default ReviewWritePage;
