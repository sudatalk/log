"use client";

import { useState } from "react";
import { KakaoSdkScript } from "./KakaoSdkScript";

const KakaoSDKChecker = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      {isReady && children}
      <KakaoSdkScript setIsReady={setIsReady} />
    </>
  );
};

export default KakaoSDKChecker;
