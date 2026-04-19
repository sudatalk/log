import { FLEX, FONT_SEMIBOLD, ITEMS_CENTER, ITEMS_END, TEXT_XS } from "@/constants/tailwind";
import clsx from "clsx";
import { Heart, MessageCircle } from "lucide-react";

const LogEmoji = () => {
  return (
    <div className={clsx(FLEX, ITEMS_CENTER, "gap-[5px]")}>
      <div className={clsx(FLEX, "gap-[4px]")}>
        <Heart size={14} strokeWidth={2} />
        <div className={clsx(FLEX, TEXT_XS, ITEMS_END, FONT_SEMIBOLD)}>21</div>
      </div>
      <div className={clsx(FLEX, "gap-[4px]")}>
        <MessageCircle size={14} strokeWidth={2} />
        <div className={clsx(FLEX, TEXT_XS, ITEMS_END, FONT_SEMIBOLD)}>4</div>
      </div>
    </div>
  );
};

export default LogEmoji;
