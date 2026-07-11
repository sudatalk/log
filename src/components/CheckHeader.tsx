"use client";

import { getCheckUser } from "@/lib/api";
import { UserStatus } from "@/types/api";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const CheckHeader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  const queryClient = useQueryClient();

  useEffect(() => {
    (async () => {
      try {
        const statusInfo = await Kakao.Auth.getStatusInfo();

        if ("error" in statusInfo) {
          throw new Error("Kakao Auth Error");
        }

        const { status, user } = statusInfo;

        if (status === "connected" && !!user) {
          const { id: appUserId } = user;

          const userResponse = await queryClient.ensureQueryData({
            queryKey: ["CHECK_USER"],
            queryFn: () => getCheckUser({ appUserId: +appUserId })
          })

          if (!userResponse.registered || userResponse.status === UserStatus.WITHDRAW) return;

          axios.defaults.headers.common["X-User-Id"] = userResponse.userId.toString();
        }
      } catch {
        return;
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return <>{!isLoading && children}</>;
};
export default CheckHeader;
