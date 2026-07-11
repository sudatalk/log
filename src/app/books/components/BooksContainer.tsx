import { FLEX, FLEX_1, FLEX_COL, GAP_3, H_FULL, P_3, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";

const BooksContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={clsx(FLEX, FLEX_COL, W_FULL, H_FULL, P_3, GAP_3, FLEX_1, "overflow-y-auto")}>{children}</div>;
};

export default BooksContainer;
