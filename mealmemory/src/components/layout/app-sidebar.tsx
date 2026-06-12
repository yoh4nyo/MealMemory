"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Utensils } from "lucide-react";

import { navigationItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-[#e4e2e1] bg-white/70 px-4 py-5 lg:block">
      <Link href="/dashboard" className="flex items-center gap-3 px-2">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#bfedd1] text-[#254f3a]">
          <Utensils className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-heading text-xl font-bold text-[#3d6751]">
            MealMemory
          </p>
          <p className="text-xs text-[#717973]">Famille Martin</p>
        </div>
      </Link>

      <nav aria-label="Navigation principale" className="mt-8 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-full px-3 py-2.5 text-sm font-semibold text-[#414943] transition",
                active
                  ? "bg-[#bfedd1] text-[#254f3a]"
                  : "hover:bg-[#f0eded] hover:text-[#3d6751]",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
