import type { LucideIcon } from "lucide-react";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-[#c1c8c1] bg-[#f6f3f2] p-8 text-center">
      <Icon className="mx-auto h-9 w-9 text-[#3d6751]" aria-hidden="true" />
      <h2 className="font-heading mt-3 text-xl font-bold text-[#1b1c1c]">
        {title}
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#717973]">
        {description}
      </p>
    </div>
  );
}
