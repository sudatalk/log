"use client";

import Script from "next/script";

const KAKAO_JS_APP_KEY = "dcd0a6bc1debe19ee4a23aff830656cb";

type Props = {
  setIsReady?: (value: boolean) => void;
};

export function KakaoSdkScript(props: Props = {}) {
  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.1/kakao.min.js"
      integrity="sha384-OL+ylM/iuPLtW5U3XcvLSGhE8JzReKDank5InqlHGWPhb4140/yrBw0bg0y7+C9J"
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={() => {
        Kakao.init(KAKAO_JS_APP_KEY);

        props.setIsReady?.(Kakao.isInitialized());
      }}
    />
  );
}
