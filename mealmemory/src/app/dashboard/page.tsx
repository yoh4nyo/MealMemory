import { CalendarPlus, ChefHat, Lightbulb, Sparkles } from "lucide-react";

import { MealCard } from "@/components/meals/meal-card";
import { ActionButton } from "@/components/ui/action-button";
import { PageHeader } from "@/components/ui/page-header";
import { meals, suggestedMeals } from "@/data/meals";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Bonjour Famille Martin"
        title="Tableau de bord"
        description="Un aperçu doux de la journée, des repas récents et des idées qui évitent de tourner en rond."
        action={
          <div className="flex flex-wrap gap-2">
            <ActionButton
              href="/meals/new"
              label="Ajouter un repas"
              icon={CalendarPlus}
            />
            <ActionButton
              href="/ideas"
              label="Idée pour ce soir"
              icon={Lightbulb}
              variant="secondary"
            />
            <ActionButton
              href="/recipes/new"
              label="Enregistrer une recette"
              icon={ChefHat}
              variant="ghost"
            />
          </div>
        }
      />

      <section className="grid gap-4 lg:grid-cols-3">
        <TodayCard
          title="Midi"
          meal="Salade composée"
          detail="15 min • Rapide"
        />
        <TodayCard
          title="Soir"
          meal="À planifier"
          detail="Une idée légère serait parfaite."
          muted
        />
        <div className="rounded-[1.5rem] border border-[#e4e2e1] bg-[#bfedd1]/40 p-5 shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
          <Sparkles className="h-6 w-6 text-[#3d6751]" aria-hidden="true" />
          <h2 className="font-heading mt-3 text-xl font-bold text-[#1b1c1c]">
            Récap de la semaine
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#414943]">
            5 repas faits maison, 1 restaurant et un favori qui revient souvent
            : les pâtes au pesto.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-heading text-2xl font-bold">Récemment mangé</h2>
            <ActionButton href="/meals" label="Voir tout" variant="ghost" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {meals.slice(0, 3).map((meal) => (
              <MealCard key={meal.id} meal={meal} compact />
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-[#e4e2e1] bg-white p-5 shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
          <h2 className="font-heading text-2xl font-bold">Suggestions</h2>
          <div className="mt-4 space-y-3">
            {suggestedMeals.slice(0, 3).map((meal) => (
              <div key={meal.id} className="rounded-2xl bg-[#f6f3f2] p-4">
                <p className="text-xs font-black text-[#db313f] uppercase">
                  {meal.label}
                </p>
                <p className="font-heading mt-1 text-lg font-bold">
                  {meal.mealName}
                </p>
                <p className="mt-1 text-sm text-[#717973]">{meal.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function TodayCard({
  title,
  meal,
  detail,
  muted,
}: {
  title: string;
  meal: string;
  detail: string;
  muted?: boolean;
}) {
  return (
    <article className="rounded-[1.5rem] border border-[#e4e2e1] bg-white p-5 shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
      <p className="text-sm font-black text-[#717973] uppercase">{title}</p>
      <h2 className="font-heading mt-3 text-2xl font-bold text-[#1b1c1c]">
        {meal}
      </h2>
      <p
        className={
          muted ? "mt-2 text-sm text-[#92001c]" : "mt-2 text-sm text-[#717973]"
        }
      >
        {detail}
      </p>
    </article>
  );
}
