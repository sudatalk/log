import { FLEX, FLEX_COL, FONT_SEMIBOLD, TEXT_XL, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";
import BookCard from "./BookCard";

const Books = () => {
  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", "py-2.5", W_FULL)}>
      <div className={clsx(FONT_SEMIBOLD, TEXT_XL)}>책 목록</div>
      <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default Books;
