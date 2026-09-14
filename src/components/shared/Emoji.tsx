import { FLEX, FONT_SEMIBOLD, ITEMS_CENTER, ITEMS_END, TEXT_XS } from "@/constants/tailwind";
import clsx from "clsx";
import { Heart, MessageCircle, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  heartCount: number;
  isLiked?: boolean;
  handleClickHeart?: (e: React.MouseEvent) => void;

  messageCount: number;
  handleClickMessage?: (e: React.MouseEvent) => void;
  /** 기본은 댓글(MessageCircle). 리뷰 수 등에는 Pen 등을 넘기면 됨 */
  MessageIcon?: LucideIcon;
  /** 하트·연필과 같은 줄에 붙일 추가 액션 (예: 구매 아이콘) */
  trailing?: ReactNode;
};

const Emoji = (props: Props) => {
  const {
    heartCount,
    isLiked = false,
    handleClickHeart,
    messageCount,
    handleClickMessage,
    MessageIcon = MessageCircle,
    trailing,
  } = props;

  return (
    <div className={clsx(FLEX, ITEMS_CENTER, "gap-[5px]")}>
      <div className={clsx(FLEX, ITEMS_CENTER, "gap-[5px]", handleClickHeart && "cursor-pointer")}>
        <Heart
          size={14}
          strokeWidth={2}
          onClick={handleClickHeart}
          className={handleClickHeart ? "cursor-pointer" : undefined}
          color={isLiked ? "#ef4444" : undefined}
          fill={isLiked ? "#ef4444" : "none"}
        />
        <div className={clsx(FLEX, TEXT_XS, ITEMS_END, FONT_SEMIBOLD)}>{heartCount || 0}</div>
      </div>
      <div className={clsx(FLEX, ITEMS_CENTER, "gap-[5px]", handleClickMessage && "cursor-pointer")}>
        <MessageIcon
          size={14}
          strokeWidth={2}
          onClick={handleClickMessage}
          className={handleClickMessage ? "cursor-pointer" : undefined}
        />
        <div className={clsx(FLEX, TEXT_XS, ITEMS_END, FONT_SEMIBOLD)}>{messageCount || 0}</div>
      </div>
      {trailing}
    </div>
  );
};

export default Emoji;
