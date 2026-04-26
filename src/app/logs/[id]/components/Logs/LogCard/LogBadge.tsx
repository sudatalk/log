import Image from "next/image";
import { FLEX, FONT_SEMIBOLD, ITEMS_CENTER } from "@/constants/tailwind";
import clsx from "clsx";

type Props = {
  bgColor: string;
  color: string;
  svg: string;
  label: string;
};

const LogBadge = (props: Props) => {
  const { bgColor, color, svg, label } = props;

  return (
    <div
      className={clsx(FLEX, ITEMS_CENTER, "gap-[3px]", "px-2 py-1", "rounded-[20px]")}
      style={{ backgroundColor: bgColor }}
    >
      <div className="h-2 w-2">
        <Image alt="" className="h-full w-full" height={8} src={svg} width={8} />
      </div>
      <div className={clsx(FONT_SEMIBOLD, color, "text-[8px]")}>{label}</div>
    </div>
  );
};

export default LogBadge;
