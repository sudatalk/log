"use client";

import { fetchCurrentUserId, USER_ID_QUERY_KEY } from "@/hooks/useGetUserId";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const CheckHeader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const queryClient = useQueryClient();

  const [access_token, setAccessToken] = useLocalStorage<string>("access_token", "");

  useEffect(() => {
    if (!access_token) return;
    try {
      Kakao.Auth.setAccessToken(access_token);
    } catch {
      setAccessToken("");
    }
  }, [access_token]);

  useEffect(() => {
    (async () => {
      try {
        await queryClient.ensureQueryData({
          queryKey: USER_ID_QUERY_KEY,
          queryFn: () => fetchCurrentUserId(queryClient),
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [queryClient]);

  return <>{!isLoading && children}</>;
};

export default CheckHeader;
