import Emoji from "@/components/shared/Emoji";
import { FLEX, ITEMS_CENTER, JUSTIFY_BETWEEN } from "@/constants/tailwind";
import clsx from "clsx";

type Props = {
  heartCount: number;
  messageCount: number;
  isLiked?: boolean;
  handleClickHeart?: (e: React.MouseEvent) => void;
  handleClickMessage?: (e: React.MouseEvent) => void;
  action?: React.ReactNode;
};

const LogCardFooter = ({
  heartCount,
  messageCount,
  isLiked,
  handleClickHeart,
  handleClickMessage,
  action,
}: Props) => {
  return (
    <div className={clsx(FLEX, ITEMS_CENTER, action && JUSTIFY_BETWEEN)}>
      <Emoji
        heartCount={heartCount}
        isLiked={isLiked}
        handleClickHeart={handleClickHeart}
        messageCount={messageCount}
        handleClickMessage={handleClickMessage}
      />
      {action}
    </div>
  );
};

export default LogCardFooter;
