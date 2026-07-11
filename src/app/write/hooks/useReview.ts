import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useGetReview from "./useGetReview";

type Review = {
  oneLine: string;
  star: number;
  recommend: string;
  impressive: {
    sentence: string;
    impression: string;
  };
  free: string;
};

export const REVIEW_ID_SEARCH_PARAMS_KEY = "reviewId";

const DEFAULT_VALUE = {
  oneLine: "",
  star: 0,
  recommend: "",
  impressive: {
    sentence: "",
    impression: "",
  },
  free: "",
};

const useReview = () => {
  const searchParams = useSearchParams();

  const reviewId = searchParams.get(REVIEW_ID_SEARCH_PARAMS_KEY) || "";

  const [review, setReview] = useState<Review>(DEFAULT_VALUE);

  const { data } = useGetReview({ reviewId });

  useEffect(
    function setInitialReview() {
      if (!data) return;

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReview({
        oneLine: data.shortComment || "",
        star: Number(data.rating) || 0,
        free: data.comment || "",
        impressive: {
          sentence: data?.quotes?.[0]?.quote || "",
          impression: data?.quotes?.[0]?.reason || "",
        },
        recommend: data?.questions?.[0]?.answer || "",
      });
    },
    [data],
  );

  const isRequired = !review.oneLine || !review.star;

  const handleChangeOneLine = (value: string) => {
    setReview((prev) => ({
      ...prev,
      oneLine: value,
    }));
  };

  const handleChangeStar = (value: number) => {
    setReview((prev) => ({
      ...prev,
      star: value,
    }));
  };

  const handleChangeRecommend = (value: string) => {
    setReview((prev) => ({
      ...prev,
      recommend: value,
    }));
  };

  const handleChangeImpressiveSentence = (value: string) => {
    setReview((prev) => ({
      ...prev,
      impressive: {
        ...prev.impressive,
        sentence: value,
      },
    }));
  };

  const handleChangeImpressiveImpression = (value: string) => {
    setReview((prev) => ({
      ...prev,
      impressive: {
        ...prev.impressive,
        impression: value,
      },
    }));
  };

  const handleChangeFree = (value: string) => {
    setReview((prev) => ({
      ...prev,
      free: value,
    }));
  };

  return {
    review,
    handleChangeOneLine,
    handleChangeStar,
    handleChangeRecommend,
    handleChangeImpressiveSentence,
    handleChangeImpressiveImpression,
    handleChangeFree,

    isRequired,
  };
};

export default useReview;
