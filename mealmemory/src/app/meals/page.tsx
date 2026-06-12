import { Search } from "lucide-react";

import { MealCard } from "@/components/meals/meal-card";
import { ActionButton } from "@/components/ui/action-button";
import { FilterChips } from "@/components/ui/filter-chips";
import { PageHeader } from "@/components/ui/page-header";
import { meals } from "@/data/meals";
import { filterLabels } from "@/lib/constants";

export default function MealsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Repas"
        description="Tous les repas connus de la famille, avec photos, notes rapides et souvenirs de la dernière fois."
        action={<ActionButton href="/meals/new" label="Ajouter un repas" />}
      />

      <section className="space-y-4 rounded-[1.5rem] border border-[#e4e2e1] bg-white p-4 shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
        <div className="relative">
          <Search
            className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-[#717973]"
            aria-hidden="true"
          />
          <input
            className="h-12 w-full rounded-full border-none bg-[#f6f3f2] pr-4 pl-12 text-sm ring-1 ring-transparent transition outline-none focus:ring-[#3d6751]"
            placeholder="Rechercher un repas, un tag, une envie..."
            type="search"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-bold text-[#717973]">Trier par:</span>
          <button className="rounded-full bg-[#bfedd1] px-4 py-2 text-sm font-bold text-[#254f3a]">
            Récemment mangé
          </button>
          <button className="rounded-full bg-[#f0eded] px-4 py-2 text-sm font-bold text-[#414943]">
            Le plus aimé
          </button>
        </div>
        <FilterChips labels={filterLabels} />
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {meals.slice(0, 6).map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </section>
    </div>
  );
}
