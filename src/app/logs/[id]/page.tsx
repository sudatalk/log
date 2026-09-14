"use client";

import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { QueryHydrator } from "@/components/QueryHydrator";
import { BG_BASE, FLEX, FLEX_COL, FULL } from "@/constants/tailwind";
import clsx from "clsx";
import LogsContainer from "./components/LogsContainer";
import Logs from "./components/Logs";
import { useParams, useRouter } from "next/navigation";
import { getRoute, REDIRECT_URL_KEY } from "@/constants/router";
import useGetUserId from "@/hooks/useGetUserId";

export default function LogsPage() {
  const params = useParams();
  const bookId = params["id"]?.toString();

  const router = useRouter();

  const { userId, isLoading } = useGetUserId();

  const isLogined = !!userId && !isLoading;

  const hnadleClickReviewButton = () => {
    if (!bookId) return;

    if (!isLogined) {
      router.push(getRoute.login({ [REDIRECT_URL_KEY]: getRoute.write({ bookId }) }));
      return;
    }

    router.push(getRoute.write({ bookId }));
  };

  return (
    <QueryHydrator>
      <div className={clsx(FULL, FLEX, BG_BASE, FLEX_COL)}>
        <Header />
        <LogsContainer>
          <Logs />
        </LogsContainer>
        <div className="sticky bottom-0 z-[5] shrink-0 bg-surface px-3 pb-3">
          <button
            className="flex h-12 w-full cursor-pointer items-center justify-center rounded-[4px] bg-amber px-7"
            onClick={hnadleClickReviewButton}
          >
            <span className="text-lg font-semibold leading-[21px] text-on-amber">리뷰 참여하기</span>
          </button>
        </div>
        <BottomNav />
      </div>
    </QueryHydrator>
  );
}
