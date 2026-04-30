import { Header } from "@/components/Header";
import { BG_BASE, FLEX, FLEX_COL, FULL } from "@/constants/tailwind";
import clsx from "clsx";
import BooksContainer from "./components/BooksContainer";
import { BottomNav } from "@/components/BottomNav";
import Books from "./components/Books";

const BooksPage = () => {
  return (
    <div className={clsx(FULL, FLEX, BG_BASE, FLEX_COL)}>
      <Header />
      <BooksContainer>
        <Books />
      </BooksContainer>
      <BottomNav />
    </div>
  );
};

export default BooksPage;
