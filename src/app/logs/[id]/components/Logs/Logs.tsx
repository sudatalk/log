import { FLEX, FLEX_COL } from "@/constants/tailwind";
import clsx from "clsx";
import LogCard from "./LogCard";
import MySaveLogCard from "./MySaveLogCard";

const Logs = () => {
  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", "py-2.5")}>
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
