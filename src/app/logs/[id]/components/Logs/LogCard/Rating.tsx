import { BG_BLACK, FLEX } from "@/constants/tailwind";
import clsx from "clsx";
import { Star, StarHalf } from "lucide-react";

const MAX_STARS = 5;
const STAR_SIZE = 14;

type StarState = 0 | 0.5 | 1;

type Props = {
  value?: number;
};

const getStarStates = (value: number): StarState[] => {
  const clamped = Math.max(0, Math.min(MAX_STARS, value));

  return Array.from({ length: MAX_STARS }, (_, i) => {
    const remainder = clamped - i;
    if (remainder >= 1) return 1;
    if (remainder >= 0.5) return 0.5;
    return 0;
  });
};

const StarIcon = ({ state }: { state: StarState }) => {
  if (state === 0) {
    return <Star size={STAR_SIZE} strokeWidth={2} color="white" />;
  }

  if (state === 1) {
    return <Star size={STAR_SIZE} strokeWidth={2} color="white" fill="white" />;
  }

  return (
    <span
      className="relative inline-flex shrink-0"
      style={{ width: STAR_SIZE, height: STAR_SIZE }}
    >
      <Star size={STAR_SIZE} strokeWidth={2} color="white" className="absolute inset-0" />
      <StarHalf size={STAR_SIZE} strokeWidth={2} color="white" fill="white" className="absolute inset-0" />
    </span>
  );
};

const Rating = ({ value = 4 }: Props) => {
  const stars = getStarStates(value);

  if (stars.every((state) => state === 0)) return null;

  return (
    <div className="inline-flex items-center gap-2.5 relative">
      <div className={clsx(FLEX, BG_BLACK, "gap-[3px]", "px-2", "py-1", "rounded-[20px]")}>
        {stars.map((state, i) => (
          <StarIcon key={i} state={state} />
        ))}
      </div>
    </div>
  );
};

export default Rating;
