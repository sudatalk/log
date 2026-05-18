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
import BookTime from "./BookTime";
import Rating from "@/app/logs/[id]/components/Logs/LogCard/Rating";
import BookImage from "./BookImage";
import BookDescription from "./BookDescription";
import BookCardTitle from "./BookCardTitle";
import type { Schedule } from "@/types/api";

type Props = {
  schedule: Schedule;
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return { date: `${y}. ${m}. ${day}`, dateTime: `${y}-${m}-${day}` };
};

const BookCard = ({ schedule }: Props) => {
  const { date, dateTime } = formatDate(schedule.endedAt);

  return (
    <article className={clsx(FLEX, ROUNDED, BORDER, BORDER_SOLID, BORDER_STRONG, "p-3.5", "gap-2.5", BG_SURFACE)}>
      <BookImage imageSrc={schedule.coverImageUrl} />
      <div className={clsx(FLEX, FLEX_1, FLEX_COL, "gap-[10px]")}>
        <header className={clsx(FLEX, W_FULL, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
          <BookCardTitle title={schedule.title} author={schedule.author} />
          <Rating value={schedule.averageRating} />
        </header>
        <BookDescription description={schedule.description} />
        <footer className={clsx(FLEX, W_FULL, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
          <Emoji heartCount={schedule.likeCount} messageCount={schedule.reviewCount} />
          <BookTime date={date} dateTime={dateTime} />
        </footer>
      </div>
    </article>
  );
};

export default BookCard;
