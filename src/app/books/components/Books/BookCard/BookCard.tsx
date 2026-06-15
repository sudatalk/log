import Emoji from "@/components/shared/Emoji";
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
import Link from "next/link";
import BookTime from "./BookTime";
import Rating from "@/app/logs/[id]/components/Logs/LogCard/Rating";
import BookImage from "./BookImage";
import BookDescription from "./BookDescription";
import BookCardTitle from "./BookCardTitle";

export type BookCardData = {
  title: string;
  author: string;
  description: string;
  coverImageUrl: string;
  averageRating: number | null;
  likeCount: number;
  reviewCount: number;
  endedAt?: string;
};

type Props = {
  book: BookCardData;
  href?: string;
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return { date: `${y}. ${m}. ${day}`, dateTime: `${y}-${m}-${day}` };
};

const BookCard = ({ book, href }: Props) => {
  const { title, author, description, coverImageUrl, averageRating, likeCount, reviewCount, endedAt } =
    book;
  const dateInfo = endedAt ? formatDate(endedAt) : null;

  const article = (
    <article className={clsx(FLEX, ROUNDED, BORDER, BORDER_SOLID, BORDER_STRONG, "p-3.5", "gap-2.5", BG_SURFACE)}>
      <BookImage imageSrc={coverImageUrl} />
      <div className={clsx(FLEX, FLEX_1, FLEX_COL, "gap-[10px]")}>
        <header className={clsx(FLEX, W_FULL, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
          <BookCardTitle title={title} author={author} />
          <Rating value={averageRating ?? undefined} />
        </header>
        <BookDescription description={description} />
        <footer className={clsx(FLEX, W_FULL, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
          <Emoji heartCount={likeCount} messageCount={reviewCount} />
          {dateInfo && <BookTime date={dateInfo.date} dateTime={dateInfo.dateTime} />}
        </footer>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {article}
      </Link>
    );
  }

  return article;
};

export default BookCard;
