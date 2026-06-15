"use client";

import { Home, Library, PenLine } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { icon: LucideIcon; href?: string };

const navItems: NavItem[] = [
  { icon: Home, href: "/" },
  { icon: Library, href: "/books" },
  { icon: PenLine },
];

const isActive = (pathname: string, href?: string) => {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  if (href === "/books") {
    return pathname === href || pathname.startsWith(`${href}/`) || pathname.startsWith("/logs/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
};

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-10 bg-surface">
      <div className="mx-auto flex h-[70px] w-full items-start">
        {navItems.map(({ icon: Icon, href }, i) => {
          const active = isActive(pathname, href);
          const className = `flex flex-1 items-center justify-center py-[23px] ${
            active ? "border-t-2 border-amber-light" : ""
          }`;
          const content = <Icon className="size-6 text-nav" />;

          return href ? (
            <Link key={i} href={href} className={className} aria-current={active ? "page" : undefined}>
              {content}
            </Link>
          ) : (
            <div key={i} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
