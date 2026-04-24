import { Header } from "@/components/Header";
import { BookSection } from "@/components/home/BookSection";
import { ReviewCTA } from "@/components/ReviewCTA";
import { BottomNav } from "@/components/BottomNav";
import { QueryHydrator } from "@/components/QueryHydrator";
import { contentStatsQueryOptions } from "@/hooks/useContentStats";
import { currentSchedulesQueryOptions } from "@/hooks/useCurrentSchedules";
import { getQueryClient } from "@/lib/queryClient";
import { CategoryType } from "@/types/api";

export default async function HomePage() {
  const queryClient = getQueryClient();
  const schedules = await queryClient.fetchQuery(currentSchedulesQueryOptions());
  const book = schedules?.find((s) => s.categoryType === CategoryType.BOOK);
  if (book) {
    await queryClient.prefetchQuery(contentStatsQueryOptions(book.contentId));
  }  

  return (
    <QueryHydrator>
      <div className="flex min-h-dvh w-full flex-col bg-surface">
        <Header />

        <main className="mx-auto flex w-full flex-1 flex-col items-center gap-3 p-3">
          <BookSection />
          <ReviewCTA daysLeft={6} />
        </main>

        <BottomNav />
      </div>
    </QueryHydrator>
  );
}
