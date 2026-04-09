import { ChevronLeft } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="flex items-center">
      <div className="flex h-10 w-[43px] items-center justify-center">
        <ChevronLeft className="size-6 text-ink-secondary" />
      </div>
      <div className="flex flex-1 items-center justify-center px-2 py-2">
        <Logo />
      </div>
      <div className="flex h-10 w-[43px] items-center justify-center">
        <div className="flex size-6 items-center justify-center rounded-full bg-[#333333]">
          <span className="text-[10px] font-semibold leading-3 text-[#FEFEFF]">
            JO
          </span>
        </div>
      </div>
    </header>
  );
}
