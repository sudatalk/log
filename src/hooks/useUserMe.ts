import { getUserMe } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const userMeQueryKey = ["USER_ME"];

const userMeQueryFn = () => {
  return getUserMe();
};

type Props = {
  enabled?: boolean;
};

const useUserMe = (props: Props = {}) => {
  return useQuery({
    queryKey: userMeQueryKey,
    queryFn: userMeQueryFn,
    enabled: props.enabled || true,
    refetchOnMount: true,
    staleTime: 0,
  });
};

export default useUserMe;
