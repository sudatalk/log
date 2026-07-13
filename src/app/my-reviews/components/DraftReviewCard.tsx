import BookImage from "@/app/books/components/Books/BookCard/BookImage";
import { getRoute } from "@/constants/router";
import { FLEX, FLEX_COL, FLEX_1, ITEMS_CENTER, JUSTIFY_BETWEEN, W_FULL } from "@/constants/tailwind";
import { calculateDaysLeft, formatReviewDate } from "@/lib/date";
import type { DraftReviewResponse } from "@/types/api";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  draft: DraftReviewResponse;
};

const DraftReviewCard = ({ draft }: Props) => {
  const { title, author, coverImageUrl, savedAt, reviewDeadline, contentId } = draft;
  const daysLeft = reviewDeadline ? calculateDaysLeft(reviewDeadline) : undefined;
  const savedDate = formatReviewDate(savedAt);

  return (
    <article
      className={clsx(
        FLEX,
        "items-stretch",
        W_FULL,
        "box-border gap-2.5 rounded border border-[#E8A96A] bg-[#FDFAF4] p-3.5",
      )}
    >
      <div className="relative shrink-0">
        <BookImage imageSrc={coverImageUrl} />
        {daysLeft !== undefined && daysLeft > 0 && (
          <span
            className={clsx(
              "absolute right-1 top-1 flex items-center justify-end",
              "rounded-full bg-[#1A1410] py-1 pl-2 pr-1",
              "text-xs font-semibold leading-[14px] text-white",
            )}
          >
            D - {daysLeft}
          </span>
        )}
      </div>

      <div className={clsx(FLEX, FLEX_1, FLEX_COL, "min-w-0 justify-between self-stretch")}>
        <div className={clsx(FLEX, FLEX_COL, "gap-1")}>
          <h3 className="w-full text-lg font-medium leading-[21px] text-ink">{title}</h3>
          <p className="w-full text-[11px] leading-[13px] tracking-[0.2px] text-ink">{author}</p>
        </div>
        <div className={clsx(FLEX, W_FULL, ITEMS_CENTER, JUSTIFY_BETWEEN, "h-6")}>
          <time className="text-[10px] leading-4 text-ink" dateTime={savedAt.slice(0, 10)}>
            {savedDate} 저장
          </time>
          <Link
            href={getRoute.write({ bookId: contentId })}
            className="flex h-6 shrink-0 items-center rounded bg-[#1F1F1F] px-3.5 text-xs font-medium leading-[14px] text-[#FEFEFF]"
          >
            수정
          </Link>
        </div>
      </div>
    </article>
  );
};

export default DraftReviewCard;
