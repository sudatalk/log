"use client";

import BookCard from "@/app/books/components/Books/BookCard/BookCard";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { MOCK_USER_ID } from "@/constants/env";
import { FLEX, FLEX_COL, FONT_SEMIBOLD, TEXT_XL, W_FULL } from "@/constants/tailwind";
import { useContentDetail } from "@/hooks/useContentDetail";
import clsx from "clsx";
import { useParams } from "next/navigation";
import LogCard from "./LogCard";
import MySaveLogCard from "./MySaveLogCard";

const Logs = () => {
  const params = useParams<{ id: string }>();
  const contentId = Number(params.id);
  const { data: content, isPending, isError } = useContentDetail(contentId, MOCK_USER_ID);

  return (
    <div className={clsx(FLEX, FLEX_COL, "gap-2.5", "py-2.5", W_FULL)}>
      {isPending && <Loading />}
      {isError && <Error />}
      {content && <BookCard book={content} />}
      <div className={clsx(FLEX, FLEX_COL, "gap-2.5")}>
        <MySaveLogCard />
        <MySaveLogCard />
        <LogCard />
        <LogCard />
        <LogCard />
      </div>
    </div>
  );
};

export default Logs;
