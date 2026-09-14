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
          setIsLoading(false);
        })();
      } catch {
        setAccessToken("");
      }
    }
  }, [access_token, isAccessTokenLoading, queryClient, setAccessToken]);

  return <>{!isLoading && children}</>;
};

export default CheckHeader;
