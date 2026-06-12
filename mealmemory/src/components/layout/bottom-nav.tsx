"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

const mobileItems = navigationItems.filter((item) =>
  ["/dashboard", "/calendar", "/meals", "/recipes", "/ideas"].includes(
    item.href,
  ),
);

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e4e2e1] bg-white/95 px-2 py-2 shadow-[0_-10px_30px_rgba(61,103,81,0.12)] backdrop-blur lg:hidden"
    >
      <div className="mx-auto grid max-w-xl grid-cols-5 gap-1">
        {mobileItems.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-1 rounded-full px-1 text-[0.7rem] font-semibold transition",
                active
                  ? "bg-[#bfedd1] text-[#254f3a]"
                  : "text-[#717973] hover:bg-[#f0eded] hover:text-[#3d6751]",
              )}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
