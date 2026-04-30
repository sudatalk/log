import { FLEX, FONT_SEMIBOLD, ITEMS_CENTER, ITEMS_END, TEXT_XS } from "@/constants/tailwind";
import clsx from "clsx";
import { Heart, MessageCircle } from "lucide-react";

type Props = {
  heartCount: number;
  handleClickHeart?: () => void;

  messageCount: number;
  handleClickMessage?: () => void;
};

const Emoji = (props: Props) => {
  const { heartCount, handleClickHeart, messageCount, handleClickMessage } = props;

  return (
    <div className={clsx(FLEX, ITEMS_CENTER, "gap-[5px]")}>
      <div className={clsx(FLEX, "gap-[5px]")}>
        <Heart size={14} strokeWidth={2} onClick={handleClickHeart} />
        <div className={clsx(FLEX, TEXT_XS, ITEMS_END, FONT_SEMIBOLD)}>{heartCount}</div>
      </div>
      <div className={clsx(FLEX, "gap-[5px]")}>
        <MessageCircle size={14} strokeWidth={2} onClick={handleClickMessage} />
        <div className={clsx(FLEX, TEXT_XS, ITEMS_END, FONT_SEMIBOLD)}>{messageCount}</div>
      </div>
    </div>
  );
};

export default Emoji;
