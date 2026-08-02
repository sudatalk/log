import { getRoute } from "@/constants/router";
import {
  CENTER,
  FLEX,
  FLEX_1,
  FLEX_COL,
  GAP_1,
  GAP_2,
  P_1,
  P_3,
  ROUNDED,
  TEXT_SM,
} from "@/constants/tailwind";
import clsx from "clsx";
import { Bell, Library, PenLine, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import SettingSheet from "./SettingSheet";
import useDisclosure from "@/hooks/useDisclosure";

enum RouteKey {
  MY_REVIEWS = "MY_REVIEWS",
  BOOKS = "BOOKS",
  NOTIFICATIONS = "NOTIFICATIONS",
  SETTINGS = "SETTINGS",
}

const menus = [
  {
    icon: PenLine,
    label: "내 리뷰",
    bgColor: "bg-blue-50",
    routeKey: RouteKey.MY_REVIEWS,
  },
  {
    icon: Library,
    label: "책 목록",
    bgColor: "bg-green-50",
    routeKey: RouteKey.BOOKS,
  },
  {
    icon: Bell,
    label: "알림",
    bgColor: "bg-yellow-50",
    routeKey: RouteKey.NOTIFICATIONS,
  },
  {
    icon: Settings,
    label: "설정",
    bgColor: "bg-purple-50",
    routeKey: RouteKey.SETTINGS,
  },
];

const ProfileNav = () => {
  const router = useRouter();

  const settingDisclousre = useDisclosure();

  const handleClick = (routeKey: RouteKey) => {
    switch (routeKey) {
      case RouteKey.MY_REVIEWS:
        router.push(getRoute.myReviews());
        break;
      case RouteKey.BOOKS:
        router.push(getRoute.books());
        break;
      case RouteKey.NOTIFICATIONS:
        // TODO: 알림 페이지로 이동
        break;
      case RouteKey.SETTINGS:
        settingDisclousre.handleOpen();
        break;
    }
  };

  return (
    <>
      <div className={clsx(FLEX, FLEX_1, GAP_2)}>
        {menus.map(({ icon: Icon, label, bgColor, routeKey }) => (
          <button
            key={label}
            className={clsx(
              FLEX,
              FLEX_1,
              FLEX_COL,
              GAP_1,
              CENTER,
              bgColor,
              ROUNDED,
              P_1,
            )}
            onClick={() => handleClick(routeKey)}
          >
            <div className={clsx(P_3, ROUNDED)}>
              <Icon />
            </div>
            <p className={clsx(TEXT_SM)}>{label}</p>
          </button>
        ))}
      </div>

      <SettingSheet
        isOpen={settingDisclousre.isOpen}
        onClose={settingDisclousre.handleClose}
      />
    </>
  );
};

export default ProfileNav;
