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
import useUserMe from "@/hooks/useUserMe";
import clsx from "clsx";



const ProfileArea = () => {
  const { data } = useUserMe();

  return (
    <div className={clsx(FLEX, FLEX_3, GAP_3, FLEX_COL, CENTER)}>
      <img src={data?.profileImageUrl} alt={data?.profileImageUrl} className="size-36" />
      <div className={clsx(TEXT_2XL, FONT_SEMIBOLD)}>{data?.nickname}</div>
      <Button size="lg" variant="outline" className={clsx(TEXT_SM)}>
        프로필 수정
      </Button>
    </div>
  );
};

export default ProfileArea;
