import { Button } from "@/components/ui/button";
import {
  CENTER,
  FLEX,
  FLEX_3,
  FLEX_COL,
  FONT_SEMIBOLD,
  GAP_3,
  TEXT_2XL,
  TEXT_SM,
} from "@/constants/tailwind";
import clsx from "clsx";

type Props = {
  nickname: string;
};

const ProfileArea = (props: Props) => {
  const { nickname } = props;

  return (
    <div className={clsx(FLEX, FLEX_3, GAP_3, FLEX_COL, CENTER)}>
      <img src="profile/profile-1.png" alt={nickname} className="size-36" />
      <div className={clsx(TEXT_2XL, FONT_SEMIBOLD)}>{nickname}</div>
      <Button size="lg" variant="outline" className={clsx(TEXT_SM)}>
        프로필 수정
      </Button>
    </div>
  );
};

export default ProfileArea;
