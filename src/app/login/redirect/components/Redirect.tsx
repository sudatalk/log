"use client";

import { KakaoSdkScript } from "@/components/KakaoSdkScript";
import { Spinner } from "@/components/ui/spinner";
import { BG_BASE, CENTER, FLEX, FULL } from "@/constants/tailwind";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  access_token: string;
  redirectUrl: string;
};

const Redirect = (props: Props) => {
  const router = useRouter();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    Kakao.Auth.setAccessToken(props.access_token);

    router.replace(props.redirectUrl);
  }, [isReady, router, props]);

  return (
    <div className={clsx(FULL, FLEX, CENTER, BG_BASE)}>
      <Spinner />
      <KakaoSdkScript setIsReady={setIsReady} />
    </div>
  );
};

export default Redirect;
