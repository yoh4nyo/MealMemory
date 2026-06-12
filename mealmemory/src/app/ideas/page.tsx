import { MealSuggestionCard } from "@/components/meals/meal-suggestion-card";
import { FilterChips } from "@/components/ui/filter-chips";
import { PageHeader } from "@/components/ui/page-header";
import { suggestedMeals } from "@/data/meals";

const ideaFilters = ["Rapide", "Restes", "Favori", "Pas mangé récemment"];

export default function IdeasPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Idées pour ce soir"
        description="MealMemory trouve l'inspiration parmi vos favoris, les envies de la famille et ce que vous n'avez pas mangé depuis longtemps."
      />
      <FilterChips labels={ideaFilters} defaultActive="Rapide" />
      <section className="grid gap-5 lg:grid-cols-3">
        {suggestedMeals.map((suggestion) => (
          <MealSuggestionCard key={suggestion.id} suggestion={suggestion} />
        ))}
      </section>
    </div>
  );
}
