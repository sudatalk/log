"use client";

import { fetchCurrentUserId, USER_ID_QUERY_KEY } from "@/hooks/useGetUserId";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const CheckHeader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const queryClient = useQueryClient();

  const [access_token, setAccessToken, isAccessTokenLoading] = useLocalStorage<string>("access_token", "");

  useEffect(() => {
    if (isAccessTokenLoading) return;

    if (access_token) {
      try {
        Kakao.Auth.setAccessToken(access_token);

        (async () => {
          await queryClient.prefetchQuery({
            queryKey: USER_ID_QUERY_KEY,
            queryFn: () => fetchCurrentUserId(queryClient),
          });
        })();
      } catch {
        setAccessToken("");
      }
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(false);
  }, [access_token, isAccessTokenLoading, queryClient, setAccessToken]);

  console.log("isLoading : ", isLoading);

  return <>{!isLoading && children}</>;
};

export default CheckHeader;
