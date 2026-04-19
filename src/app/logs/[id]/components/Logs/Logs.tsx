import { FLEX, FLEX_COL, FONT_SEMIBOLD, TEXT_XL } from "@/constants/tailwind";
import clsx from "clsx";
import LogCard from "./LogCard";
import MySaveLogCard from "./MySaveLogCard";

const Logs = () => {
  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", "py-2.5")}>
      <div className={clsx(FONT_SEMIBOLD, TEXT_XL)}>리뷰</div>
      <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
        <MySaveLogCard />
        <MySaveLogCard />
        <LogCard />
        <LogCard />
        <LogCard />
      </div>
    </div>
  );
};

export default Logs;
