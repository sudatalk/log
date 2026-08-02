import { Button } from "@/components/ui/button";
import {
  CENTER,
  FLEX,
  GAP_5,
  P_3,
  ROUNDED,
  STICKY,
  TEXT_XL,
  W_FULL,
} from "@/constants/tailwind";
import clsx from "clsx";
import { ReviewType } from "../hooks/useWriteReview";
import { useSearchParams } from "next/navigation";
import { REVIEW_ID_SEARCH_PARAMS_KEY } from "../hooks/useReview";

type Props = {
  disabled: boolean;
  handleSubmitReview: (type: ReviewType) => void;
};

const WriteReviewButton = (props: Props) => {
  const { disabled, handleSubmitReview } = props;

  const searchParams = useSearchParams();

  const isModify = !!searchParams.get(REVIEW_ID_SEARCH_PARAMS_KEY);

  return (
    <div className={clsx(FLEX, W_FULL, CENTER, GAP_5, STICKY, P_3, "bottom-0")}>
      {isModify ? (
        <>
          <Button
            className={clsx("h-10 p-6 bg-[#FFA500] w-full", ROUNDED)}
            size="lg"
            disabled={disabled}
            onClick={() => handleSubmitReview(ReviewType.PUBLISH)}
          >
            <span className={clsx(TEXT_XL)}>수정하기</span>
          </Button>
        </>
      ) : (
        <>
          <Button
            className={clsx("h-10 p-6 bg-[#333333] w-40", ROUNDED)}
            size="lg"
            disabled={disabled}
            onClick={() => handleSubmitReview(ReviewType.DRAFT)}
          >
            <span className={clsx(TEXT_XL)}>임시저장</span>
          </Button>
          <Button
            className={clsx("h-10 p-6 bg-[#348352] w-40", ROUNDED)}
            size="lg"
            disabled={disabled}
            onClick={() => handleSubmitReview(ReviewType.PUBLISH)}
          >
            <span className={clsx(TEXT_XL)}>작성하기</span>
          </Button>
        </>
      )}
    </div>
  );
};

export default WriteReviewButton;
