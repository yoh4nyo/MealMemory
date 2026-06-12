import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ActionButtonProps = {
  href?: string;
  label: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "ghost" | "tomato";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: "bg-[#3d6751] text-white hover:bg-[#345d48]",
  secondary: "bg-[#bfedd1] text-[#254f3a] hover:brightness-95",
  ghost: "bg-white text-[#3d6751] ring-1 ring-[#e4e2e1] hover:bg-[#f0eded]",
  tomato: "bg-[#ffdad8] text-[#92001c] hover:brightness-95",
};

export function ActionButton({
  href,
  label,
  icon: Icon,
  variant = "primary",
  className,
  onClick,
}: ActionButtonProps) {
  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      {label}
    </>
  );
  const classes = cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-bold shadow-sm transition active:scale-[0.98]",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
