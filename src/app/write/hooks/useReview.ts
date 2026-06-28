import { useState } from "react";

type Review = {
  oneLine: string;
  star: number;
  recommend?: string;
  impressive?: {
    sentence?: string;
    impression?: string;
  };
  free?: string;
};

const DEFAULT_VALUE = {
  oneLine: "",
  star: 0,
};

const useReview = () => {
  const [review, setReview] = useState<Review>(DEFAULT_VALUE);

  console.log("review : ", review);

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

  return { review, handleChangeOneLine, handleChangeStar };
};

export default useReview;
