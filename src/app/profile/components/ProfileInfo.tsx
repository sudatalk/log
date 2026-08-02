import {
  BG_SURFACE,
  CENTER,
  FLEX,
  FLEX_1,
  FLEX_COL,
  FONT_SEMIBOLD,
  JUSTIFY_AROUND,
  ROUNDED,
  TEXT_GRAY,
  TEXT_SM,
  TEXT_XL,
} from "@/constants/tailwind";
import clsx from "clsx";

const ProfileInfo = () => {
  return (
    <div className={clsx(FLEX, FLEX_1, BG_SURFACE, ROUNDED, JUSTIFY_AROUND)}>
      <div className={clsx(FLEX, CENTER, FLEX_COL)}>
        <p className={clsx(TEXT_XL, FONT_SEMIBOLD)}>9</p>
        <p className={clsx(TEXT_SM, TEXT_GRAY)}>읽은 책</p>
      </div>

      <div className={clsx(FLEX, CENTER, FLEX_COL)}>
        <p className={clsx(TEXT_XL, FONT_SEMIBOLD)}>74</p>
        <p className={clsx(TEXT_SM, TEXT_GRAY)}>받은 좋아요</p>
      </div>

      <div className={clsx(FLEX, CENTER, FLEX_COL)}>
        <p className={clsx(TEXT_XL, FONT_SEMIBOLD)}>12</p>
        <p className={clsx(TEXT_SM, TEXT_GRAY)}>받은 코멘트</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
