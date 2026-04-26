import { FLEX, FLEX_COL, GAP_3, H_FULL, P_3, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";

const LogsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={clsx(FLEX, FLEX_COL, W_FULL, H_FULL, P_3, GAP_3)}>{children}</div>;
};

export default LogsContainer;
