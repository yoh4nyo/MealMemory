import Image from "next/image";
import { Camera, PlusCircle, Save } from "lucide-react";

import { ActionButton } from "@/components/ui/action-button";
import { categoryLabels } from "@/lib/constants";
import type { CalendarMeal } from "@/types/meal";

type DayMealPanelProps = {
  dateLabel: string;
  meals: CalendarMeal[];
};

export function DayMealPanel({ dateLabel, meals }: DayMealPanelProps) {
  const lunch = meals.find((meal) => meal.mealType === "midi");
  const dinner = meals.find((meal) => meal.mealType === "soir");

  return (
    <aside className="rounded-[1.5rem] border border-[#e4e2e1] bg-white shadow-[0_10px_35px_rgba(51,51,51,0.06)]">
      <div className="border-b border-[#e4e2e1] bg-[#f6f3f2] p-5">
        <h2 className="font-heading text-2xl font-bold text-[#3d6751]">
          {dateLabel}
        </h2>
        <p className="text-sm text-[#717973]">Aujourd’hui</p>
      </div>
      <div className="space-y-6 p-5">
        <MealSlot title="Midi" meal={lunch} />
        <MealSlot title="Soir" meal={dinner} />

        <section>
          <h3 className="text-sm font-black text-[#717973] uppercase">
            Souvenir du jour
          </h3>
          <div className="mt-3 rounded-2xl border border-dashed border-[#c1c8c1] bg-[#f6f3f2] p-5 text-center">
            <Camera
              className="mx-auto h-7 w-7 text-[#3d6751]"
              aria-hidden="true"
            />
            <p className="mt-2 text-sm font-bold text-[#414943]">
              Ajouter une photo
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-black text-[#717973] uppercase">
            Notes de la famille
          </h3>
          <div className="mt-3 min-h-24 rounded-2xl bg-[#f6f3f2] p-4 text-sm leading-6 text-[#717973]">
            Les enfants ont repris deux fois. À refaire avec une salade verte.
          </div>
        </section>

        <div className="flex gap-2">
          <ActionButton label="Modifier" variant="ghost" className="flex-1" />
          <ActionButton label="Sauvegarder" icon={Save} className="flex-1" />
        </div>
      </div>
    </aside>
  );
}

function MealSlot({ title, meal }: { title: string; meal?: CalendarMeal }) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-black text-[#717973] uppercase">{title}</h3>
        <button
          type="button"
          className="inline-flex items-center gap-1 text-sm font-bold text-[#3d6751]"
        >
          <PlusCircle className="h-4 w-4" aria-hidden="true" />
          Ajouter
        </button>
      </div>
      {meal ? (
        <div className="flex gap-3 rounded-2xl bg-[#f6f3f2] p-3">
          {meal.imageUrl ? (
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={meal.imageUrl}
                alt={meal.title}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
          ) : null}
          <div>
            <p className="font-heading text-lg font-bold text-[#1b1c1c]">
              {meal.title}
            </p>
            <span className="mt-1 inline-flex rounded-full bg-[#bfedd1] px-2 py-1 text-xs font-black text-[#254f3a]">
              {categoryLabels[meal.category]}
            </span>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#e4e2e1] bg-[#fbf9f8] p-4 text-sm text-[#717973]">
          Aucun repas planifié pour ce créneau.
        </div>
      )}
    </section>
  );
}
