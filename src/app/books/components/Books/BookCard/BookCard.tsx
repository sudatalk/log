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

type BookCardData = {
  title: string;
  author: string;
  description: string;
  likes: number;
  comments: number;
  date: string;
  dateTime: string;
  imageSrc: string;
};
const bookCard: BookCardData = {
  title: "수레바퀴 아래서",
  author: "헤르만 헤세",
  description:
    "소년 한스 기벤라트는 마을 사람들의 기대와 격려를 한 몸에 받으며 마울브론 신학교에 입학한다. 하지만 끊임없는 압박으로 다가오는 가족과 고루한 신학교의 종교적 엄숙주의 아래서 한스는 점점 마음이 병들어간다. 급기야 소년은 신경쇠약증에 걸려 학교에서 쫓겨나게 되고, 떠날 때와 달리 아무도 맞아주지 않는 고향마을로 돌아온다.",
  likes: 21,
  comments: 4,
  date: "2026. 03. 08",
  dateTime: "2026-03-08",
  imageSrc: "full-dummy-image.png",
};

const BookCard = () => {
  return (
    <article className={clsx(FLEX, ROUNDED, BORDER, BORDER_SOLID, BORDER_STRONG, "p-3.5", "gap-2.5", BG_SURFACE)}>
      <BookImage imageSrc={bookCard.imageSrc} />
      <div className={clsx(FLEX, FLEX_1, FLEX_COL, "gap-[10px]")}>
        <header className={clsx(FLEX, W_FULL, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
          <BookCardTitle title={bookCard.title} author={bookCard.author} />
          <Rating />
        </header>
        <BookDescription description={bookCard.description} />
        <footer className={clsx(FLEX, W_FULL, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
          <Emoji heartCount={bookCard.likes} messageCount={bookCard.comments} />
          <BookTime date={bookCard.date} dateTime={bookCard.dateTime} />
        </footer>
      </div>
    </article>
  );
};

export default BookCard;
