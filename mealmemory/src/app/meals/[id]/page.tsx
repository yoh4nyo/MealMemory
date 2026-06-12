import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarPlus, ChefHat, Edit, Heart } from "lucide-react";

import { ActionButton } from "@/components/ui/action-button";
import { PageHeader } from "@/components/ui/page-header";
import { RatingStars } from "@/components/ui/rating-stars";
import { meals } from "@/data/meals";

type MealDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MealDetailPage({ params }: MealDetailPageProps) {
  const { id } = await params;
  const meal = meals.find((candidate) => candidate.id === id);

  if (!meal) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={meal.name}
        description="Détail du repas, historique familial et petites notes pour la prochaine fois."
        action={
          <div className="flex flex-wrap gap-2">
            <ActionButton label="Recuisiner ce repas" icon={ChefHat} />
            <ActionButton
              href="/calendar"
              label="Ajouter"
              icon={CalendarPlus}
              variant="secondary"
            />
            <ActionButton label="Modifier" icon={Edit} variant="ghost" />
          </div>
        }
      />

      <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="overflow-hidden rounded-[1.5rem] border border-[#e4e2e1] bg-white shadow-[0_10px_35px_rgba(51,51,51,0.06)]">
          <div className="relative h-[22rem]">
            <Image
              src={meal.imageUrl}
              alt={meal.name}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 p-5">
            <div className="flex flex-wrap items-center gap-3">
              <RatingStars rating={meal.ratingScore} showScore />
              {meal.favorite ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#ffdad8] px-3 py-1 text-sm font-black text-[#92001c]">
                  <Heart
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  />
                  Coup de cœur
                </span>
              ) : null}
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <Metric label="Ce mois" value={`${meal.timesThisMonth} fois`} />
              <Metric label="Dernière fois" value={meal.lastEaten} />
              <Metric label="Temps de prép" value={meal.prepTime} />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <section className="rounded-[1.5rem] border border-[#e4e2e1] bg-white p-5 shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
            <h2 className="font-heading text-2xl font-bold">
              Historique des repas
            </h2>
            <div className="mt-5 space-y-4">
              {(meal.history ?? []).map((item) => (
                <div key={item.date} className="rounded-2xl bg-[#f6f3f2] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-bold text-[#1b1c1c]">{item.date}</p>
                    <RatingStars rating={item.score} showScore />
                  </div>
                  <p className="mt-1 text-sm text-[#717973]">{item.context}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-[#e4e2e1] bg-white p-5 shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
            <h2 className="font-heading text-2xl font-bold">Petites notes</h2>
            <p className="mt-3 rounded-2xl bg-[#f6f3f2] p-4 text-sm leading-7 text-[#414943]">
              {meal.notes}
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#f6f3f2] p-4">
      <p className="text-xs font-black text-[#717973] uppercase">{label}</p>
      <p className="font-heading mt-1 text-lg font-bold text-[#1b1c1c]">
        {value}
      </p>
    </div>
  );
}
