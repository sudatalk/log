import { CENTER, FLEX, FLEX_1, FLEX_COL, GAP_2 } from "@/constants/tailwind";
import clsx from "clsx";
import { Bell, Library, PenLine, Settings } from "lucide-react";

const menus = [
  { icon: PenLine, label: "내 리뷰" },
  { icon: Library, label: "책 목록" },
  { icon: Bell, label: "알림" },
  { icon: Settings, label: "설정" },
];

const ProfileNav = () => {
  return (
    <div className={clsx(FLEX, FLEX_1)}>
      {menus.map(({ icon: Icon, label }, index) => (
        <div
          key={label}
          className={clsx(
            FLEX,
            FLEX_1,
            FLEX_COL,
            GAP_2,
            CENTER,
            index !== menus.length - 1 && "border-r border-gray-200",
          )}
        >
          <Icon />
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileNav;
