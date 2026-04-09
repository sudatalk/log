import { Header } from "@/components/Header";
import { BookDetail } from "@/components/home/BookDetail";
import { ReviewCTA } from "@/components/ReviewCTA";
import { BottomNav } from "@/components/BottomNav";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[412px] flex-col bg-surface">
      <Header />

      <main className="flex flex-1 flex-col items-center gap-3 p-3">
        <BookDetail
          imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
          title="수레바퀴 아래서"
          author="헤르만 헤세"
          description="소년 한스 기벤라트는 마을 사람들의 기대와 격려를 한 몸에 받으며 마울브론 신학교에 입학한다. 하지만 끊임없는 압박으로 다가오는 가족과 고루한 신학교의 종교적 엄숙주의 아래서 한스는 점점 마음이 병들어간다. 급기야 소년은 신경쇠약증에 걸려 학교에서 쫓겨나게 되고, 떠날 때와 달리 아무도 맞아주지 않는 고향마을로 돌아온다."
          likes={21}
          comments={4}
          rating={3.7}
        />
        <ReviewCTA daysLeft={6} />
      </main>

      <BottomNav />
    </div>
  );
}
