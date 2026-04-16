import { BG_BLACK, FLEX } from "@/constants/tailwind";
import clsx from "clsx";
import { Star } from "lucide-react";

const Rating = () => {
  return (
    <div className="inline-flex items-center gap-2.5 relative">
      <div className={clsx(FLEX, BG_BLACK, "gap-[3px]", "px-2", "py-1", "rounded-[20px]")}>
        <Star size={14} strokeWidth={2} color="white" />
        <Star size={14} strokeWidth={2} color="white" />
        <Star size={14} strokeWidth={2} color="white" />
        <Star size={14} strokeWidth={2} color="white" />
      </div>
    </div>
  );
};

export default Rating;
