import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";

import { RatingStars } from "@/components/ui/rating-stars";
import type { Meal } from "@/types/meal";

type MealCardProps = {
  meal: Meal;
  compact?: boolean;
};

export function MealCard({ meal, compact = false }: MealCardProps) {
  return (
    <Link
      href={`/meals/${meal.id}`}
      className="group overflow-hidden rounded-[1.5rem] border border-[#e4e2e1] bg-white shadow-[0_10px_30px_rgba(51,51,51,0.05)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(51,51,51,0.08)]"
    >
      <div
        className={
          compact
            ? "relative h-36 overflow-hidden"
            : "relative h-52 overflow-hidden"
        }
      >
        <Image
          src={meal.imageUrl}
          alt={meal.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-[#254f3a] backdrop-blur">
          {meal.prepTime}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <h2 className="font-heading text-xl font-bold text-[#1b1c1c]">
          {meal.name}
        </h2>
        <RatingStars rating={meal.ratingScore} />
        <div className="flex items-center gap-2 text-sm text-[#717973]">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          {meal.lastEaten}
        </div>
        {!compact ? (
          <div className="flex items-center gap-2 text-sm text-[#717973]">
            <Clock className="h-4 w-4" aria-hidden="true" />
            Temps de prép {meal.prepTime}
          </div>
        ) : null}
        <div className="flex flex-wrap gap-2">
          {meal.tags.slice(0, compact ? 2 : 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f0eded] px-3 py-1 text-xs font-bold text-[#414943]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
