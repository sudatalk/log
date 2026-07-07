import { useState } from "react";

const useRegisterForm = () => {
  const [nickname, setNickname] = useState("");
  const [selected, setSelected] = useState<number>();

  return {
    nickname,
    setNickname,
    selected,
    setSelected,
  };
};

export default useRegisterForm;
