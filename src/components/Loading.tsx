import { FLEX, ITEMS_CENTER, W_FULL } from "@/constants/tailwind";
import { Spinner } from "@/components/ui/spinner";
import clsx from "clsx";

const Loading = () => {
  return (
    <div className={clsx(FLEX, ITEMS_CENTER, W_FULL, "justify-center", "py-6")}>
      <Spinner />
    </div>
  );
};

export default Loading;
