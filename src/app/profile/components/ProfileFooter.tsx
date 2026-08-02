import { FLEX, JUSTIFY_AROUND, TEXT_GRAY, TEXT_XS } from "@/constants/tailwind";
import clsx from "clsx";

const ProfileFooter = () => {
  return (
    <div className={clsx(FLEX, JUSTIFY_AROUND)}>
      <button className={clsx(TEXT_XS, TEXT_GRAY)}>이용약관</button>
      <button className={clsx(TEXT_XS, TEXT_GRAY)}>개인정보 처리방침</button>
      <button className={clsx(TEXT_XS, TEXT_GRAY)}>문의</button>
    </div>
  );
};

export default ProfileFooter;
