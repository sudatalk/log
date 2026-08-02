import { getCheckUser } from "@/lib/api";
import { UserStatus } from "@/types/api";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useGetUserId = () => {
  const [userId, setUserId] = useState<number | undefined>();
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

          const userResponse = await queryClient.fetchQuery({
            queryKey: ["CHECK_USER"],
            queryFn: () => getCheckUser({ appUserId: +appUserId }),
          });

          if (
            !userResponse.registered ||
            userResponse.status === UserStatus.WITHDRAW
          )
            return;

          setUserId(userResponse.userId);
        }
      } catch {
        return;
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { userId, isLoading };
};

export default useGetUserId;
