"use client";

import { Header } from "@/components/Header";
import { BookSection } from "@/components/home/BookSection";
import { ReviewCTA } from "@/components/ReviewCTA";
import { BottomNav } from "@/components/BottomNav";
import { useCurrentSchedules } from "@/hooks/useCurrentSchedules";
import { calculateDaysLeft } from "@/lib/date";

export default function HomePage() {
  const { data: schedules } = useCurrentSchedules();

  const book = schedules?.[0];
  const daysLeft = calculateDaysLeft(book?.endedAt);

  return (
    <div className="flex h-dvh min-h-0 w-full flex-col bg-surface">
      <Header />

      <main className="mx-auto flex min-h-0 w-full flex-1 flex-col">
        <div className="min-h-0 flex-1 overflow-y-auto p-3">
          <BookSection />
        </div>
        <div className="sticky bottom-0 z-[5] shrink-0 bg-surface px-3 pb-3">
          <ReviewCTA bookId={book?.contentId} daysLeft={daysLeft} />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
