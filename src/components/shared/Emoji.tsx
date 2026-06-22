import { FLEX, FONT_SEMIBOLD, ITEMS_CENTER, ITEMS_END, TEXT_XS } from "@/constants/tailwind";
import clsx from "clsx";
import { Heart, MessageCircle } from "lucide-react";

type Props = {
  heartCount: number;
  isLiked?: boolean;
  handleClickHeart?: (e: React.MouseEvent) => void;

  messageCount: number;
  handleClickMessage?: (e: React.MouseEvent) => void;
};

const Emoji = (props: Props) => {
  const { heartCount, isLiked = false, handleClickHeart, messageCount, handleClickMessage } = props;

  return (
    <div className={clsx(FLEX, ITEMS_CENTER, "gap-[5px]")}>
      <div className={clsx(FLEX, "gap-[5px]", handleClickHeart && "cursor-pointer")}>
        <Heart
          size={14}
          strokeWidth={2}
          onClick={handleClickHeart}
          className={handleClickHeart ? "cursor-pointer" : undefined}
          color={isLiked ? "#ef4444" : undefined}
          fill={isLiked ? "#ef4444" : "none"}
        />
        <div className={clsx(FLEX, TEXT_XS, ITEMS_END, FONT_SEMIBOLD)}>{heartCount}</div>
      </div>
      <div className={clsx(FLEX, "gap-[5px]", handleClickMessage && "cursor-pointer")}>
        <MessageCircle
          size={14}
          strokeWidth={2}
          onClick={handleClickMessage}
          className={handleClickMessage ? "cursor-pointer" : undefined}
        />
        <div className={clsx(FLEX, TEXT_XS, ITEMS_END, FONT_SEMIBOLD)}>{messageCount}</div>
      </div>
    </div>
  );
};

export default Emoji;
