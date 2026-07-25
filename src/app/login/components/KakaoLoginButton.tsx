import { NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI } from "@/constants/env";
import { Button } from "@base-ui/react";
import Image from "next/image";

type Props = {
  redirectUrl?: string | null;
};

const KakaoLoginButton = (props: Props) => {

  const { redirectUrl = "/" } = props;

  const handleClickKakaoLoginButton = () => {
    const url = new URL("https://kauth.kakao.com/oauth/authorize");

    url.searchParams.set("client_id", "ae45be10073c4af64e587798d03ebc85");
    url.searchParams.set("redirect_uri", `${NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI}`);
    url.searchParams.set('state', `${redirectUrl}`);
    url.searchParams.set("response_type", "code");

    window.location.href = url.toString();
  };

  return (
    <>
      <Button onClick={handleClickKakaoLoginButton}>
        <Image
          src="/kakao_login_medium_wide.png"
          alt="카카오 로그인"
          width={300}
          height={45}
          priority
        />
      </Button>
    </>
  );
};

export default KakaoLoginButton;
