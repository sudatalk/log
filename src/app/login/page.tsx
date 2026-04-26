"use client";

import { BG_BASE, CENTER, FLEX, FLEX_2, FLEX_8, FLEX_COL, ITEMS_CENTER, MIN_H_DVH, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";
import Image from "next/image";
import KakaoLoginButton from "./components/KakaoLoginButton";

const LoginPage = () => {
  return (
    <div className={clsx(W_FULL, MIN_H_DVH, BG_BASE, FLEX, FLEX_COL)}>
      <div className={clsx(FLEX, FLEX_COL, FLEX_8, ITEMS_CENTER, "pt-40")}>
        <Image src="/logo.png" alt="LOG" width={280} height={138} priority />
      </div>
      <div className={clsx(FLEX, FLEX_2, CENTER)}>
        <KakaoLoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
