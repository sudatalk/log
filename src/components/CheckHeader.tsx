"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { getCheckUser } from "@/lib/api";
import { UserStatus } from "@/types/api";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
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
          const statusInfo = await Kakao.Auth.getStatusInfo();

          if ("error" in statusInfo) {
            throw new Error("Kakao Auth getStatusInfo 오류 발생");
          }

          const { status, user } = statusInfo;

          if (status === "connected" && !!user) {
            const { id: appUserId } = user;

            const userResponse = await getCheckUser({ appUserId: +appUserId });

            if (!userResponse.registered || userResponse.status === UserStatus.WITHDRAW) return;

            axios.interceptors.request.use((config) => {
              axios.defaults.headers.common["X-User-Id"] = userResponse.userId.toString();
              return config;
            });
          }

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
