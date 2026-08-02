import { skipToken, useQuery } from "@tanstack/react-query";
import { getReviewById } from "@/lib/api";

type Props = {
  reviewId?: string;
};

const getReviewQueryKey = (reviewId?: string) => ["GET_REVIEW", reviewId];

const getReviewQueryFn = (reviewId: string) => {
  return getReviewById(reviewId);
};

const useGetReview = (props: Props) => {
  const { reviewId } = props;

  return useQuery({
    queryKey: getReviewQueryKey(reviewId),
    queryFn: reviewId ? () => getReviewQueryFn(reviewId) : skipToken,
    enabled: !!reviewId,
  });
};

export default useGetReview;
