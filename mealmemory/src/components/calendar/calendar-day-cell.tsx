import { categoryLabels } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { CalendarMeal } from "@/types/meal";

type CalendarDayCellProps = {
  day: number;
  muted?: boolean;
  selected?: boolean;
  today?: boolean;
  meals: CalendarMeal[];
  onSelect: (day: number) => void;
};

const categoryStyles = {
  home: "bg-[#bfedd1]/50 text-[#254f3a] before:bg-[#a8d5ba]",
  takeaway: "bg-[#ffdad8]/60 text-[#92001c] before:bg-[#ffb3b1]",
  restaurant: "bg-[#d9ecf6] text-[#245064] before:bg-[#8fbcd4]",
};

export function CalendarDayCell({
  day,
  muted,
  selected,
  today,
  meals,
  onSelect,
}: CalendarDayCellProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(day)}
      className={cn(
        "min-h-28 border-r border-b border-[#e4e2e1] p-2 text-left transition hover:bg-[#f6f3f2]",
        muted && "bg-white/40 text-[#717973]/50",
        selected && "bg-[#bfedd1]/18 ring-2 ring-[#3d6751] ring-inset",
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "text-sm font-bold",
            today && "rounded-full bg-[#3d6751] px-2 py-1 text-white",
          )}
        >
          {day}
        </span>
        {today ? (
          <span className="hidden text-[0.62rem] font-black text-[#3d6751] uppercase sm:inline">
            Aujourd’hui
          </span>
        ) : null}
      </div>
      <div className="mt-2 space-y-1">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className={cn(
              "relative truncate rounded px-2 py-1 pl-4 text-[0.68rem] font-bold before:absolute before:top-1/2 before:left-1.5 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full",
              categoryStyles[meal.category],
            )}
            title={`${meal.title} - ${categoryLabels[meal.category]}`}
          >
            {meal.title}
          </div>
        ))}
      </div>
    </button>
  );
}
