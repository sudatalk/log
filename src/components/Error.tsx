import { FLEX, ITEMS_CENTER, TEXT_SM, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";

type Props = {
  message?: string;
};

const Error = ({ message = "목록을 불러오지 못했습니다." }: Props) => {
  return (
    <div className={clsx(FLEX, ITEMS_CENTER, W_FULL, "justify-center", "py-6", TEXT_SM)} role="alert">
      {message}
    </div>
  );
};

export default Error;
