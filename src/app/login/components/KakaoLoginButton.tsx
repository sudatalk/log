import { NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI } from "@/constants/env";
import { Button } from "@base-ui/react";
import Image from "next/image";

type Props = {
  redirectUrl?: string;
};

const KakaoLoginButton = (props: Props) => {
  const { redirectUrl } = props;

  const handleClickKakaoLoginButton = () => {
    Kakao.Auth.authorize({
      redirectUri: NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI,
      ...(redirectUrl ? { state: redirectUrl } : {}),
    });
  };

  return (
    <>
      <Button onClick={handleClickKakaoLoginButton}>
        <Image src="/kakao_login_medium_wide.png" alt="카카오 로그인" width={300} height={45} priority />
      </Button>
    </>
  );
};

export default KakaoLoginButton;
