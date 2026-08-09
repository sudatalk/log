import { FLEX, JUSTIFY_AROUND, TEXT_GRAY, TEXT_XS } from "@/constants/tailwind";
import { handleOpenExternalBrowser } from "@/utils/webview";
import clsx from "clsx";

const ProfileFooter = () => {
  const handleClickButton = (url: string) => {
    handleOpenExternalBrowser({ url });
  };

  return (
    <div className={clsx(FLEX, JUSTIFY_AROUND)}>
      <button
        className={clsx(TEXT_XS, TEXT_GRAY)}
        onClick={() => handleClickButton("https://www.example.com")}
      >
        이용약관
      </button>
      <button
        className={clsx(TEXT_XS, TEXT_GRAY)}
        onClick={() => handleClickButton("https://www.example.com")}
      >
        개인정보 처리방침
      </button>
      <button
        className={clsx(TEXT_XS, TEXT_GRAY)}
        onClick={() => handleClickButton("https://www.example.com")}
      >
        문의
      </button>
    </div>
  );
};

export default ProfileFooter;
