import { FLEX, FLEX_COL, FONT_SEMIBOLD, TEXT_XL } from "@/constants/tailwind";
import clsx from "clsx";
import MySaveLogCard from "./MySaveLogCard";

const MySaveLogs = () => {
  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", "py-2.5")}>
      <div className={clsx(FONT_SEMIBOLD, TEXT_XL)}>작성중인 리뷰</div>
      <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
        <MySaveLogCard />
        <MySaveLogCard />
      </div>
    </div>
  );
};

export default MySaveLogs;
