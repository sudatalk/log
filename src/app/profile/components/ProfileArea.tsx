import { Button } from "@/components/ui/button";
import { getRoute, REDIRECT_URL_KEY } from "@/constants/router";
import {
  BG_SURFACE,
  CENTER,
  FLEX,
  FLEX_2,
  FLEX_COL,
  FONT_SEMIBOLD,
  GAP_3,
  TEXT_SM,
  TEXT_XL,
} from "@/constants/tailwind";
import useUserMe from "@/hooks/useUserMe";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const ProfileArea = () => {
  const { data } = useUserMe();

  const router = useRouter();

  const handleNavigationRegister = () => {
    router.push(
      getRoute.register({
        [REDIRECT_URL_KEY]: getRoute.profile(),
      }),
    );
  };

  return (
    <div className={clsx(FLEX, FLEX_2, GAP_3, FLEX_COL, CENTER)}>
      <img
        src={data?.profileImageUrl}
        alt={data?.profileImageUrl}
        className="size-36"
      />
      <div className={clsx(TEXT_XL, FONT_SEMIBOLD)}>{data?.nickname}</div>
      <Button
        size="lg"
        variant="outline"
        className={clsx(TEXT_SM, BG_SURFACE)}
        onClick={handleNavigationRegister}
      >
        프로필 수정
      </Button>
    </div>
  );
};

export default ProfileArea;
