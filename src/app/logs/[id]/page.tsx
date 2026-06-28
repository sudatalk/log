import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { QueryHydrator } from "@/components/QueryHydrator";
import { BG_BASE, FLEX, FLEX_COL, FULL } from "@/constants/tailwind";
import { contentDetailQueryOptions } from "@/hooks/useContentDetail";
import { getQueryClient } from "@/lib/queryClient";
import clsx from "clsx";
import LogsContainer from "./components/LogsContainer";
import Logs from "./components/Logs";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function LogsPage({ params }: Props) {
  const { id } = await params;
  const contentId = Number(id);
  const queryClient = getQueryClient();

  if (!Number.isNaN(contentId)) {
    await queryClient.prefetchQuery(contentDetailQueryOptions(contentId));
  }

  return (
    <QueryHydrator>
      <div className={clsx(FULL, FLEX, BG_BASE, FLEX_COL)}>
        <Header />
        <LogsContainer>
          <Logs />
        </LogsContainer>
        <BottomNav />
      </div>
    </QueryHydrator>
  );
}
