"use client";

import {
  BG_BASE,
  CENTER,
  FLEX,
  FLEX_2,
  FLEX_8,
  FLEX_COL,
  ITEMS_CENTER,
  MIN_H_DVH,
  W_FULL,
} from "@/constants/tailwind";
import clsx from "clsx";
import Image from "next/image";
import KakaoLoginButton from "./components/KakaoLoginButton";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCheckUser } from "@/lib/api";
import { UserStatus } from "@/types/api";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import { REDIRECT_URL_KEY } from "@/constants/router";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectUrl = searchParams.get(REDIRECT_URL_KEY);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function autoLogin() {
      (async () => {
        try {
          if (!redirectUrl) return;

          const statusInfo = await Kakao.Auth.getStatusInfo();

          if ("error" in statusInfo) {
            throw new Error("Kakao Auth getStatusInfo 오류 발생");
          }

          const { status, user } = statusInfo;

          if (status === "connected" && !!user) {
            const { id: appUserId } = user;

            const userResponse = await getCheckUser({ appUserId: +appUserId });

            if (
              !userResponse.registered ||
              userResponse.status === UserStatus.WITHDRAW
            )
              return;

            axios.defaults.headers.common["X-User-Id"] =
              userResponse.userId.toString();

            router.replace(redirectUrl);
          }
        } catch {
          // TODO : 에러 처리

          return;
        } finally {
          setIsLoading(false);
        }
      })();
    },
    [redirectUrl, router],
  );

  if (isLoading) {
    return (
      <div className={clsx(W_FULL, MIN_H_DVH, BG_BASE, FLEX, FLEX_COL, CENTER)}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={clsx(W_FULL, MIN_H_DVH, BG_BASE, FLEX, FLEX_COL)}>
      <div className={clsx(FLEX, FLEX_COL, FLEX_8, ITEMS_CENTER, "pt-40")}>
        <Image src="/logo.png" alt="LOG" width={280} height={138} priority />
      </div>
      <div className={clsx(FLEX, FLEX_2, CENTER)}>
        <KakaoLoginButton redirectUrl={redirectUrl} />
      </div>
    </div>
  );
};

export default LoginPage;
