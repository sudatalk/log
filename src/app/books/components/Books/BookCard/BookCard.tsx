"use client";

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
import { getRoute, REDIRECT_URL_KEY } from "@/constants/router";
import { useDraftReviews } from "@/hooks/useDraftReviews";
import { useMyReviews } from "@/hooks/useMyReviews";
import { useToggleContentLike } from "@/hooks/useToggleContentLike";
import clsx from "clsx";
import { Pen } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BookTime from "./BookTime";
import Rating from "@/app/logs/[id]/components/Logs/LogCard/Rating";
import BookImage from "./BookImage";
import BookDescription from "./BookDescription";
import BookCardTitle from "./BookCardTitle";

export type BookCardData = {
  contentId?: number;
  id?: number;
  title: string;
  author: string;
  description: string;
  coverImageUrl: string;
  averageRating: number | null;
  liked?: boolean;
  likeCount: number;
  commentCount?: number;
  reviewCount?: number;
  endedAt?: string;
};

type Props = {
  book: BookCardData;
  href?: string;
  isLogined: boolean;
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return { date: `${y}. ${m}. ${day}`, dateTime: `${y}-${m}-${day}` };
};

const BookCard = ({ book, href, isLogined }: Props) => {
  const {
    title,
    author,
    description,
    coverImageUrl,
    averageRating,
    liked = false,
    likeCount,
    commentCount,
    reviewCount,
    endedAt,
  } = book;
  const messageCount = commentCount ?? reviewCount ?? 0;
  const contentId = book.contentId ?? book.id;
  const dateInfo = endedAt ? formatDate(endedAt) : null;

  const router = useRouter();
  const pathname = usePathname();
  const { mutate: toggleLike, isPending: isTogglingLike } = useToggleContentLike();
  const { reviews: myReviews } = useMyReviews(isLogined);
  const { drafts } = useDraftReviews(isLogined);

  const handleClickHeart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!contentId) return;

    if (!isLogined) {
      router.push(getRoute.login({ [REDIRECT_URL_KEY]: pathname }));
      return;
    }
    if (isTogglingLike) return;

    toggleLike(contentId);
  };

  const handleClickPen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!contentId) return;

    const writePath = getRoute.write({ bookId: contentId });

    if (!isLogined) {
      router.push(getRoute.login({ [REDIRECT_URL_KEY]: writePath }));
      return;
    }

    const published = myReviews.find((review) => review.contentId === contentId);
    if (published) {
      router.push(
        getRoute.write({
          bookId: contentId,
          reviewId: published.reviewId,
        }),
      );
      return;
    }

    const draft = drafts.find((item) => item.contentId === contentId);
    if (draft) {
      router.push(
        getRoute.write({
          bookId: contentId,
          reviewId: draft.reviewId,
        }),
      );
      return;
    }

    router.push(writePath);
  };

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
          <Emoji
            heartCount={likeCount}
            isLiked={liked}
            handleClickHeart={contentId ? handleClickHeart : undefined}
            messageCount={messageCount}
            handleClickMessage={contentId ? handleClickPen : undefined}
            MessageIcon={Pen}
          />
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
