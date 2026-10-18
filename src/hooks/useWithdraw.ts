import { deleteUserMe } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const useWithdraw = () => {
  return useMutation({
    mutationFn: () => deleteUserMe(),
  });
};

export default useWithdraw;
