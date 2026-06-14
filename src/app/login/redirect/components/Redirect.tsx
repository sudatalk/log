"use client";

import { Spinner } from "@/components/ui/spinner";
import { BG_BASE, CENTER, FLEX, FULL } from "@/constants/tailwind";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  access_token: string;
  redirectUrl: string;
};

const Redirect = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    Kakao.Auth.setAccessToken(props.access_token);

    /**
     * TODO : 회원가입 필요 시 회원가입 페이지로 이동 그 외 redirect 페이지로 이동
     */

    router.replace(props.redirectUrl);
  }, [router, props]);

  return (
    <div className={clsx(FULL, FLEX, CENTER, BG_BASE)}>
      <Spinner />
    </div>
  );
};

export default Redirect;
