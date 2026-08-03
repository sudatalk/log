"use client";

import {
  fetchCurrentUserId,
  USER_ID_QUERY_KEY,
} from "@/hooks/useGetUserId";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const CheckHeader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const queryClient = useQueryClient();

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
