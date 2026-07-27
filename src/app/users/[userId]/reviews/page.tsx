import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { BG_BASE, FLEX, FLEX_COL, FLEX_1, FULL, P_3 } from "@/constants/tailwind";
import clsx from "clsx";
import UserReviews from "./components/UserReviews";

type Props = {
  params: Promise<{ userId: string }>;
};

const UserReviewsPage = async ({ params }: Props) => {
  const { userId } = await params;

  return (
    <div className={clsx(FULL, FLEX, BG_BASE, FLEX_COL)}>
      <Header />
      <main className={clsx(FLEX, FLEX_1, FLEX_COL, P_3, "overflow-y-auto")}>
        <UserReviews userId={Number(userId)} />
      </main>
      <BottomNav />
    </div>
  );
};

export default UserReviewsPage;
