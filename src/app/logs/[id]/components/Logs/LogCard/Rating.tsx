import { BG_BLACK, FLEX } from "@/constants/tailwind";
import clsx from "clsx";
import { Star } from "lucide-react";

const MAX_STARS = 5;

type Props = {
  value?: number;
};

const Rating = ({ value = 4 }: Props) => {
  const filled = Math.max(0, Math.min(MAX_STARS, Math.round(value)));

  return (
    <div className="inline-flex items-center gap-2.5 relative">
      <div className={clsx(FLEX, BG_BLACK, "gap-[3px]", "px-2", "py-1", "rounded-[20px]")}>
        {Array.from({ length: filled }, (_, i) => (
          <Star key={i} size={14} strokeWidth={2} color="white" />
        ))}
      </div>
    </div>
  );
};

export default Rating;
