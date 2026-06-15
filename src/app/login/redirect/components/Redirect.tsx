"use client";

import { Spinner } from "@/components/ui/spinner";
import { BG_BASE, CENTER, FLEX, FULL } from "@/constants/tailwind";
import { getCheckUser } from "@/lib/api";
import { UserStatus } from "@/types/api";
import clsx from "clsx";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  access_token: string;
  redirectUrl: string;
};

const Redirect = (props: Props) => {
  const { access_token, redirectUrl } = props;

  const router = useRouter();

  useEffect(() => {
    try {
      Kakao.Auth.setAccessToken(access_token);

      (async () => {
        const statusInfo = await Kakao.Auth.getStatusInfo();

        if ("error" in statusInfo) {
          throw new Error("Kakao Auth getStatusInfo 오류 발생");
        }

        const { status, user } = statusInfo;

        if (status === "connected" && !!user) {
          const { id: appUserId } = user;

          const userResponse = await getCheckUser({ appUserId: +appUserId });

          // * 회원가입이 필요한 경우
          if (!userResponse.registered || userResponse.status === UserStatus.WITHDRAW) {
            router.replace(`/register?redirectUrl=${redirectUrl}`);
          }
          // * 회원가입이 되어있는 경우
          else {
            router.replace(redirectUrl);
          }
        }
      })();
    } catch {
      // TODO : 에러 처리

      return;
    }
  }, [router, access_token, redirectUrl]);

  return (
    <div className={clsx(FULL, FLEX, CENTER, BG_BASE)}>
      <Spinner />
    </div>
  );
};

export default Redirect;
