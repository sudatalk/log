import { getReviewsContentsWrite } from "@/lib/api";
import { skipToken, useQuery } from "@tanstack/react-query";

const getReviewContentQueryKey = (contentId?: string) => ["GET_REVIEW_CONTENT", contentId];

type Props = {
  contentId?: string;
};

const useGetReviewContent = (props: Props) => {
  const { contentId } = props;

  return useQuery({
    queryKey: getReviewContentQueryKey(contentId),
    queryFn: contentId ? () => getReviewsContentsWrite(+contentId) : skipToken,
    enabled: !!contentId,
  });
};

export default useGetReviewContent;
