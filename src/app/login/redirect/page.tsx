import axios from "axios";
import Redirect from "./components/Redirect";
import {
  KAKAO_LOGIN_CLIENT_ID,
  KAKAO_LOGIN_CLIENT_SECRET,
  NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI,
} from "@/constants/env";

const KAKAO_OAUTH_TOKEN_API = "https://kauth.kakao.com/oauth/token";

const DEFAULT_KAKAO_LOGIN_PARAMS = {
  grant_type: "authorization_code",
  redirect_uri: NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI,
};

const DEFAULT_KAKAO_LOGIN_HEADER = {
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
};

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const LoginRedirectPage = async (props: Props) => {
  const searchParams = await props.searchParams;

  const code = searchParams.code;
  const redirectUrl = searchParams.state ?? "/";

  const { data } = await axios.post(
    KAKAO_OAUTH_TOKEN_API,
    {
      ...DEFAULT_KAKAO_LOGIN_PARAMS,
      client_id: KAKAO_LOGIN_CLIENT_ID,
      code,
      client_secret: KAKAO_LOGIN_CLIENT_SECRET,
    },
    {
      headers: DEFAULT_KAKAO_LOGIN_HEADER,
    },
  );

  return <Redirect {...data} redirectUrl={redirectUrl} />;
};

export default LoginRedirectPage;
