import { postSignUpUser } from "@/lib/api";
import { UserSignUpRequest } from "@/types/api";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
  return useMutation({
    mutationFn: (data: UserSignUpRequest) => {
      return postSignUpUser(data);
    },
  });
};

export default useRegister;
