import { Header } from "@/components/Header";
import { BookSection } from "@/components/home/BookSection";
import { ReviewCTA } from "@/components/ReviewCTA";
import { BottomNav } from "@/components/BottomNav";
import { QueryHydrator } from "@/components/QueryHydrator";
import { currentSchedulesQueryOptions } from "@/hooks/useCurrentSchedules";
import { calculateDaysLeft } from "@/lib/date";
import { getQueryClient } from "@/lib/queryClient";

export default async function HomePage() {
  const queryClient = getQueryClient();
  const schedules = await queryClient.fetchQuery(
    currentSchedulesQueryOptions(),
  );

  const book = schedules?.[0];
  const daysLeft = calculateDaysLeft(book?.endedAt);

  // TODO: 책 못가져왔을 때 보여줄 화면
  return (
    <QueryHydrator>
      <div className="flex min-h-dvh w-full flex-col bg-surface">
        <Header />

        <main className="mx-auto flex w-full flex-1 flex-col items-center gap-3 p-3">
          <BookSection />
          <ReviewCTA daysLeft={daysLeft} />
        </main>

        <BottomNav />
      </div>
    </QueryHydrator>
  );
}
