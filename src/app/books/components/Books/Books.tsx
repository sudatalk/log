"use client";

import { FLEX, FLEX_COL, FONT_SEMIBOLD, TEXT_XL, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";
import BookCard from "./BookCard";
import Loading from "../../../../components/Loading";
import Error from "../../../../components/Error";
import { useSchedules } from "@/hooks/useSchedules";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const Books = () => {
  const { schedules, fetchNextPage, hasNextPage, isFetchingNextPage, isPending, isError } = useSchedules();

  const sentinelRef = useInfiniteScroll({
    onIntersect: () => {
      fetchNextPage();
    },
    enabled: hasNextPage && !isFetchingNextPage,
  });

  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", "py-2.5", W_FULL)}>
      <div className={clsx(FONT_SEMIBOLD, TEXT_XL)}>책 목록</div>
      <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
        {isPending && <Loading />}
        {isError && <Error />}
        {schedules.map((schedule) => (
          <BookCard key={schedule.scheduleId} schedule={schedule} />
        ))}
        {hasNextPage && <div ref={sentinelRef} aria-hidden />}
        {isFetchingNextPage && <Loading />}
      </div>
    </div>
  );
};

export default Books;
