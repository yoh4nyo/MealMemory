import { Camera } from "lucide-react";

import { ActionButton } from "@/components/ui/action-button";
import { FilterChips } from "@/components/ui/filter-chips";
import { PageHeader } from "@/components/ui/page-header";

const mealTypes = ["Petit-déjeuner", "Déjeuner", "Dîner", "Snack"];
const tags = ["Rapide", "Sain", "Réconfort", "Favori", "Week-end", "Restes"];
const ratings = ["Coup de cœur", "Bon", "Moyen", "Pas encore"];

export default function NewMealPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Ajouter un repas"
        description="Une saisie rapide pour garder le souvenir du plat, de la date, de la photo et des notes."
      />
      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1.5rem] border border-dashed border-[#c1c8c1] bg-white p-6 text-center shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[2rem] bg-[#f6f3f2]">
            <Camera className="h-10 w-10 text-[#3d6751]" aria-hidden="true" />
          </div>
          <p className="mt-4 font-bold text-[#414943]">
            Ajouter une photo du repas
          </p>
        </div>

        <form className="space-y-5 rounded-[1.5rem] border border-[#e4e2e1] bg-white p-5 shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
          <Field label="Nom du repas" placeholder="Ex: Gratin de courgettes" />
          <Field label="Date" type="date" />
          <FormBlock title="Type de repas">
            <FilterChips labels={mealTypes} defaultActive="Dîner" />
          </FormBlock>
          <FormBlock title="Tags">
            <FilterChips labels={tags} defaultActive="Rapide" />
          </FormBlock>
          <FormBlock title="Note">
            <FilterChips labels={ratings} defaultActive="Coup de cœur" />
          </FormBlock>
          <label className="block">
            <span className="text-sm font-bold text-[#414943]">Notes</span>
            <textarea
              className="mt-2 min-h-28 w-full rounded-2xl border-none bg-[#f6f3f2] p-4 text-sm ring-1 ring-transparent outline-none focus:ring-[#3d6751]"
              placeholder="Ce qu'on veut retenir pour la prochaine fois..."
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <ActionButton label="Sauvegarder" />
            <ActionButton href="/meals" label="Annuler" variant="ghost" />
          </div>
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-[#414943]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-full border-none bg-[#f6f3f2] px-4 text-sm ring-1 ring-transparent outline-none focus:ring-[#3d6751]"
      />
    </label>
  );
}

function FormBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-bold text-[#414943]">{title}</p>
      {children}
    </div>
  );
}
