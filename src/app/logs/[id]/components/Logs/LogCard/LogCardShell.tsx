import {
  BG_SURFACE,
  BORDER,
  BORDER_SOLID,
  BORDER_STRONG,
  FLEX,
  FLEX_COL,
  ROUNDED,
  W_FULL,
} from "@/constants/tailwind";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

const LogCardShell = ({ children }: Props) => {
  return (
    <div
      className={clsx(
        FLEX,
        FLEX_COL,
        W_FULL,
        BG_SURFACE,
        ROUNDED,
        BORDER,
        BORDER_SOLID,
        BORDER_STRONG,
        "gap-2.5",
        "p-2.5",
      )}
    >
      {children}
    </div>
  );
};

export default LogCardShell;
