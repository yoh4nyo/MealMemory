import { LinkIcon, Sparkles } from "lucide-react";

import { RecipeCard } from "@/components/recipes/recipe-card";
import { ActionButton } from "@/components/ui/action-button";
import { FilterChips } from "@/components/ui/filter-chips";
import { PageHeader } from "@/components/ui/page-header";
import { recipes } from "@/data/recipes";

const recipeFilters = [
  "Toutes",
  "À tester",
  "Déjà fait",
  "Instagram",
  "TikTok",
  "YouTube",
];

export default function RecipesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Recettes enregistrées"
        description="Un endroit pour coller les pépites trouvées sur Instagram, TikTok, YouTube ou le web."
        action={<ActionButton href="/recipes/new" label="Nouvelle recette" />}
      />

      <section className="rounded-[1.5rem] border border-[#e4e2e1] bg-white p-5 shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
        <label className="text-sm font-bold text-[#414943]">
          Importer une nouvelle pépite
        </label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <LinkIcon
              className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-[#717973]"
              aria-hidden="true"
            />
            <input
              className="h-12 w-full rounded-full border-none bg-[#f6f3f2] pr-4 pl-12 text-sm ring-1 ring-transparent outline-none focus:ring-[#3d6751]"
              placeholder="Coller un lien Instagram, TikTok ou YouTube..."
            />
          </div>
          <ActionButton label="Enregistrer" />
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-heading text-2xl font-bold">Mes collections</h2>
          <button className="text-sm font-bold text-[#3d6751]">
            Voir tout
          </button>
        </div>
        <FilterChips labels={recipeFilters} />
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {recipes.slice(0, 2).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        <div className="flex min-h-80 flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-[#bfedd1] bg-[#bfedd1]/16 p-8 text-center">
          <Sparkles className="h-10 w-10 text-[#3d6751]" aria-hidden="true" />
          <h2 className="font-heading mt-4 text-2xl font-bold text-[#3d6751]">
            Inspiration du jour ?
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#717973]">
            Laissez MealMemory trouver une recette parmi vos favoris.
          </p>
          <ActionButton label="Choisir pour moi" className="mt-5" />
        </div>
        {recipes.slice(2).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </div>
  );
}
