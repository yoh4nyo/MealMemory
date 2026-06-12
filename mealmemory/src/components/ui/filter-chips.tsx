"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type FilterChipsProps = {
  labels: readonly string[];
  defaultActive?: string;
};

export function FilterChips({
  labels,
  defaultActive = labels[0],
}: FilterChipsProps) {
  const [active, setActive] = useState(defaultActive);

  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {labels.map((label) => (
        <button
          key={label}
          type="button"
          onClick={() => setActive(label)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap transition",
            active === label
              ? "bg-[#3d6751] text-white"
              : "bg-white text-[#414943] ring-1 ring-[#e4e2e1] hover:bg-[#f0eded]",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
