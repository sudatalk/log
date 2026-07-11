"use client";

import { Logo } from "@/components/Logo";
import { REDIRECT_URL_KEY } from "@/constants/router";
import useGetUserId from "@/hooks/useGetUserId";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  const { userId, isLoading } = useGetUserId();

  const isLogined = !!userId && !isLoading;

  const hnadleClickProfile = () => {
    if (!isLogined) {
      router.push(
        `/login?${REDIRECT_URL_KEY}=${encodeURIComponent("/profile")}`,
      );
    }

    // TOOD : 마이 페이지로 이동
  };

  return (
    <header className="sticky top-0 z-10 bg-surface">
      <div className="mx-auto flex w-full items-center">
        <button
          type="button"
          className="flex h-10 w-[43px] items-center justify-center"
          onClick={() => router.back()}
          aria-label="뒤로 가기"
        >
          <ChevronLeft className="size-6 text-ink-secondary" />
        </button>
        <div className="flex flex-1 items-center justify-center px-2 py-2">
          <Logo />
        </div>
        <div className="flex h-10 w-[43px] items-center justify-center">
          <div
            className="flex size-6 cursor-pointer items-center justify-center rounded-full bg-[#333333]"
            onClick={hnadleClickProfile}
          >
            <span className="text-[10px] font-semibold leading-3 text-[#FEFEFF]">
              JO
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
