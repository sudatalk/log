import { patchUserMe } from "@/lib/api";
import { UserUpdateRequest } from "@/types/api";
import { useMutation } from "@tanstack/react-query";

const useModify = () => {
    return useMutation({
        mutationFn: (data: UserUpdateRequest) => {
            return patchUserMe(data);
        },
    });
};

export default useModify;
