import { getCheckUser } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const getCheckUserQueryKey = ["CHECK_USER"];

export const getCheckUserQueryFn = (appUserId: string) => getCheckUser({ appUserId: +appUserId });

type Props = {
  appUserId: string;
};

const useGetCheckUser = (props: Props) => {
  const { appUserId } = props;

  return useQuery({
    queryKey: getCheckUserQueryKey,
    queryFn: () => getCheckUserQueryFn(appUserId),
    enabled: !!appUserId,
  });
};

export default useGetCheckUser;
