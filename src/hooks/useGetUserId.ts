import { getCheckUser } from "@/lib/api";
import { UserStatus } from "@/types/api";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const USER_ID_QUERY_KEY = ["USER_ID"] as const;

export async function fetchCurrentUserId(
  queryClient: QueryClient,
): Promise<number | undefined> {
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
      ) {
        return undefined;
      }

      axios.defaults.headers.common["X-User-Id"] =
        userResponse.userId.toString();
      return userResponse.userId;
    }

    return undefined;
  } catch {
    return undefined;
  }
}

const useGetUserId = () => {
  const { data: userId, isPending } = useQuery({
    queryKey: USER_ID_QUERY_KEY,
    queryFn: ({ client }) => fetchCurrentUserId(client),
    staleTime: Infinity,
  });

  return { userId, isLoading: isPending };
};

export default useGetUserId;
