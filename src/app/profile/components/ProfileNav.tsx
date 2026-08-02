import { Button } from "@/components/ui/button";
import {
  CENTER,
  FLEX,
  FLEX_1,
  FLEX_COL,
  GAP_2,
  P_3,
  ROUNDED,
  TEXT_SM,
} from "@/constants/tailwind";
import clsx from "clsx";
import { Bell, Library, PenLine, Settings } from "lucide-react";

const menus = [
  { icon: PenLine, label: "내 리뷰", bgColor: "bg-blue-50" },
  { icon: Library, label: "책 목록", bgColor: "bg-green-50" },
  { icon: Bell, label: "알림", bgColor: "bg-yellow-50" },
  { icon: Settings, label: "설정", bgColor: "bg-purple-50" },
];

const ProfileNav = () => {
  return (
    <div className={clsx(FLEX, FLEX_1, GAP_2)}>
      {menus.map(({ icon: Icon, label, bgColor }) => (
        <button
          key={label}
          className={clsx(
            FLEX,
            FLEX_1,
            FLEX_COL,
            GAP_2,
            CENTER,
            bgColor,
            ROUNDED,
          )}
        >
          <div className={clsx(P_3, ROUNDED)}>
            <Icon />
          </div>
          <p className={clsx(TEXT_SM)}>{label}</p>
        </button>
      ))}
    </div>
  );
};

export default ProfileNav;
