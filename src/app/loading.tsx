import { Spinner } from "@/components/ui/spinner";
import { BG_BASE, CENTER, FLEX, FULL } from "@/constants/tailwind";
import clsx from "clsx";

const GlobalLoading = () => {
  return (
    <div className={clsx(FULL, FLEX, CENTER, BG_BASE)}>
      <Spinner />
    </div>
  );
};

export default GlobalLoading;
