import BookCardTitle from "@/app/books/components/Books/BookCard/BookCardTitle";
import BookDescription from "@/app/books/components/Books/BookCard/BookDescription";
import BookImage from "@/app/books/components/Books/BookCard/BookImage";
import {
  BG_SURFACE,
  BORDER,
  BORDER_SOLID,
  BORDER_STRONG,
  FLEX,
  FLEX_1,
  FLEX_COL,
  ITEMS_CENTER,
  JUSTIFY_BETWEEN,
  ROUNDED,
  W_FULL,
} from "@/constants/tailwind";
import clsx from "clsx";

export type Props = {
  title: string;
  author: string;
  description: string;
  coverImageUrl: string;
};

const BookInfo = (props: Props) => {
  const { coverImageUrl, title, author, description } = props;

  return (
    <article
      className={clsx(
        FLEX,
        ROUNDED,
        BORDER,
        BORDER_SOLID,
        BORDER_STRONG,
        "p-3.5",
        "gap-2.5",
        BG_SURFACE,
      )}
    >
      <BookImage imageSrc={coverImageUrl} />
      <div className={clsx(FLEX, FLEX_1, FLEX_COL, "gap-[10px]")}>
        <header className={clsx(FLEX, W_FULL, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
          <BookCardTitle title={title} author={author} />
        </header>
        <BookDescription description={description} />
      </div>
    </article>
  );
};

export default BookInfo;
