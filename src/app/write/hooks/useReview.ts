import { useState } from "react";

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
  const [review, setReview] = useState<Review>(DEFAULT_VALUE);

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
  };
};

export default useReview;
