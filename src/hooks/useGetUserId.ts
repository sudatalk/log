import { getCheckUser } from "@/lib/api";
import { UserStatus } from "@/types/api";
import { useEffect, useState } from "react";

const useGetUserId = () => {
    const [userId, setUserId] = useState<number | undefined>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try{
            const statusInfo = await Kakao.Auth.getStatusInfo();

            if ("error" in statusInfo) {
                throw new Error("Kakao Auth Error");
            }
            
            const { status, user } = statusInfo;

            if (status === "connected" && !!user) {
                const { id: appUserId } = user;

                const userResponse = await getCheckUser({ appUserId: +appUserId });

                if (!userResponse.registered || userResponse.status === UserStatus.WITHDRAW) return;

                setUserId(userResponse.userId);
            }
        } catch {
            return;
        } finally {
            setIsLoading(false);
        }
        })();
    }, [])

    return {userId, isLoading}
}

export default useGetUserId;