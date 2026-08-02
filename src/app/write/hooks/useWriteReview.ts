import { useMutation } from "@tanstack/react-query";
import { draftReviewContents, reviewContents } from "@/lib/api";
import { ReviewContentsRequest } from "@/types/api";

export enum ReviewType {
  PUBLISH = "PUBLISH",
  DRAFT = "DRAFT",
}

const useWriteReview = () => {
  return useMutation({
    mutationFn: (variables: {
      type: ReviewType;
      contentId: number;
      data: ReviewContentsRequest;
    }) =>
      variables.type === ReviewType.PUBLISH
        ? reviewContents({
            contentId: variables.contentId,
            data: variables.data,
          })
        : draftReviewContents({
            contentId: variables.contentId,
            data: variables.data,
          }),
  });
};

export default useWriteReview;
