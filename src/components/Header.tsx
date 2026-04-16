import { ChevronLeft } from "lucide-react";
import { Logo } from "@/components/Logo";
import clsx from "clsx";
import { BG_BASE } from "@/constants/tailwind";

export function Header() {
  return (
    <header className={clsx("flex items-center", BG_BASE)} style={{ position: "sticky", top: 0, zIndex: 2 }}>
      <div className="flex h-10 w-[43px] items-center justify-center">
        <ChevronLeft className="size-6 text-ink-secondary" />
      </div>
      <div className="flex flex-1 items-center justify-center px-2 py-2">
        <Logo />
      </div>
      <div className="flex h-10 w-[43px] items-center justify-center">
        <div className="flex size-6 items-center justify-center rounded-full bg-[#333333]">
          <span className="text-[10px] font-semibold leading-3 text-[#FEFEFF]">JO</span>
        </div>
      </div>
    </header>
  );
}
