import { getTerms } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const termsQueryKey = ["TERMS"];

const termsQueryFn = () => {
  return getTerms();
};

const useTerms = () => {
  return useQuery({
    queryKey: termsQueryKey,
    queryFn: termsQueryFn,
  });
};

export default useTerms;
