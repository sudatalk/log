import {
  CENTER,
  FLEX,
  FLEX_COL,
  FONT_SEMIBOLD,
  GAP_1,
  ITEMS_CENTER,
  JUSTIFY_BETWEEN,
  TEXT_SM,
  TEXT_XS,
} from "@/constants/tailwind";
import { formatReviewDate } from "@/lib/date";
import clsx from "clsx";
import { useState } from "react";
import Rating from "./Rating";

type ProfileAvatarProps = {
  nickname: string;
  profileImageUrl: string;
};

const getInitials = (nickname: string) => nickname.slice(0, 2);

const ProfileAvatar = ({ nickname, profileImageUrl }: ProfileAvatarProps) => {
  const [hasError, setHasError] = useState(false);
  const showImage = profileImageUrl && !hasError;

  return (
    <div
      className={clsx(
        "size-10 shrink-0 overflow-hidden rounded-full bg-[#3D3028]",
        CENTER,
      )}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={`${nickname} 프로필`}
          className="size-full object-cover"
          src={profileImageUrl}
          onError={() => setHasError(true)}
        />
      ) : (
        <span className={clsx(FONT_SEMIBOLD, TEXT_SM, "text-white")}>{getInitials(nickname)}</span>
      )}
    </div>
  );
};

type Props = {
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  rating: number;
};

const LogCardHeader = ({ nickname, profileImageUrl, createdAt, rating }: Props) => {
  const date = formatReviewDate(createdAt);
  const dateTime = createdAt.slice(0, 10);

  return (
    <div className={clsx(FLEX, ITEMS_CENTER, JUSTIFY_BETWEEN)}>
      <div className={clsx(FLEX, ITEMS_CENTER, "gap-2.5")}>
        <ProfileAvatar nickname={nickname} profileImageUrl={profileImageUrl} />
        <div className={clsx(FLEX, FLEX_COL, GAP_1)}>
          <div className={TEXT_SM}>{nickname}</div>
          <time className={clsx(TEXT_XS, "text-ink-muted")} dateTime={dateTime}>
            {date}
          </time>
        </div>
      </div>
      <Rating value={rating} />
    </div>
  );
};

export default LogCardHeader;
