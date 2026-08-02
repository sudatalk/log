import { FLEX, ITEMS_CENTER, JUSTIFY_BETWEEN, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";
import LogBadge from "./LogBadge";
import type { LogBadgeItem } from "./logCardUtils";

type Props = {
  badges: LogBadgeItem[];
  onClickBadge: (value: string) => void;
  trailing?: React.ReactNode;
};

const LogBadgeRow = ({ badges, onClickBadge, trailing }: Props) => {
  if (badges.length === 0 && !trailing) return null;

  return (
    <div className={clsx(FLEX, W_FULL, ITEMS_CENTER, trailing ? JUSTIFY_BETWEEN : undefined, "gap-2.5")}>
      {badges.length > 0 ? (
        <div className={clsx(FLEX, ITEMS_CENTER, "gap-[5px]")}>
          {badges.map((badge) => (
            <LogBadge key={badge.label} {...badge} onClickBadge={onClickBadge} />
          ))}
        </div>
      ) : (
        <div />
      )}
      {trailing}
    </div>
  );
};

export default LogBadgeRow;
