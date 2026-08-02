import useUserMe from "@/hooks/useUserMe";
import { useEffect, useState } from "react";
import { PROFILE_IMAGE_LIST } from "../constants/profiles";

const useRegisterForm = () => {
  const { data, isLoading } = useUserMe();

  const [nickname, setNickname] = useState("");
  const [selected, setSelected] = useState<number>();

  useEffect(() => {
    if (isLoading || !data) return;

    const { nickname, profileImageUrl } = data;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNickname(nickname || '');

    const selectedIndex = PROFILE_IMAGE_LIST.findIndex(v => v === profileImageUrl)

    setSelected(selectedIndex === -1 ? undefined : selectedIndex)
  }, [data, isLoading])

  return {
    nickname,
    setNickname,
    selected,
    setSelected,
  };
};

export default useRegisterForm;
