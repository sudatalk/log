import MyLogCard from "@/app/my-reviews/components/MyLogCard";
import { Separator } from "@/components/ui/separator";
import {
  CENTER,
  FLEX,
  FLEX_1,
  FLEX_6,
  FLEX_COL,
  GAP_3,
  GAP_5,
} from "@/constants/tailwind";
import { useMyReviews } from "@/hooks/useMyReviews";
import clsx from "clsx";

const ProfileBestReview = () => {
  const { data: reviews } = useMyReviews();

  const bestReivewList = reviews
    ?.toSorted((a, b) => b.likeCount - a.likeCount)
    .slice(0, 3);

  return (
    <div className={clsx(FLEX, FLEX_6, FLEX_COL, GAP_5)}>
      <div className={clsx(FLEX, GAP_3)}>
        <div className="shrink-0">베스트 리뷰</div>
        <div className={clsx(FLEX, CENTER, FLEX_1)}>
          <Separator />
        </div>
      </div>
      <div className={clsx(FLEX)}>
        {bestReivewList?.map((review) => (
          <MyLogCard
            key={review.reviewId}
            review={review}
            options={{ hideButton: true }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileBestReview;
