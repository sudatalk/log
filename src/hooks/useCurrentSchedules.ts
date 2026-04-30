import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants/queryKeys";
import { getCurrentSchedules } from "@/lib/api";

export function currentSchedulesQueryOptions() {
  return {
    queryKey: queryKeys.schedules.current,
    queryFn: getCurrentSchedules,
  };
}

export function useCurrentSchedules() {
  return useQuery(currentSchedulesQueryOptions());
}
