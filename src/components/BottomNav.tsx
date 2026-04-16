import { BG_BASE } from "@/constants/tailwind";
import clsx from "clsx";
import { Home, Library, PenLine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navItems: { icon: LucideIcon; active?: boolean }[] = [
  { icon: Home, active: true },
  { icon: Library },
  { icon: PenLine },
];

export function BottomNav() {
  return (
    <nav
      className={clsx("flex h-[70px] items-start self-stretch", BG_BASE)}
      style={{ position: "sticky", bottom: 0, zIndex: 2 }}
    >
      {navItems.map(({ icon: Icon, active }, i) => (
        <div
          key={i}
          className={`flex flex-1 items-center justify-center py-[23px] ${
            active ? "border-t-2 border-amber-light" : ""
          }`}
        >
          <Icon className="size-6 text-nav" />
        </div>
      ))}
    </nav>
  );
}
