import { ImagePlus, LinkIcon } from "lucide-react";

import { ActionButton } from "@/components/ui/action-button";
import { FilterChips } from "@/components/ui/filter-chips";
import { PageHeader } from "@/components/ui/page-header";

const platforms = ["Instagram", "TikTok", "YouTube", "Site web", "Manuel"];
const statuses = ["À tester", "Déjà fait", "Favori"];
const tags = ["Rapide", "Veggie", "Enfants", "Dessert", "Four", "Favori"];

export default function NewRecipePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Sauvegarder une recette"
        description="Prototype statique pour coller un lien ou préparer une recette manuelle."
      />
      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1.5rem] border border-dashed border-[#c1c8c1] bg-white p-6 text-center shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[2rem] bg-[#f6f3f2]">
            <ImagePlus
              className="h-10 w-10 text-[#3d6751]"
              aria-hidden="true"
            />
          </div>
          <p className="mt-4 font-bold text-[#414943]">
            Aperçu ou miniature de la recette
          </p>
        </div>

        <form className="space-y-5 rounded-[1.5rem] border border-[#e4e2e1] bg-white p-5 shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
          <label className="block">
            <span className="text-sm font-bold text-[#414943]">Lien</span>
            <div className="relative mt-2">
              <LinkIcon
                className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-[#717973]"
                aria-hidden="true"
              />
              <input
                className="h-12 w-full rounded-full border-none bg-[#f6f3f2] pr-4 pl-12 text-sm ring-1 ring-transparent outline-none focus:ring-[#3d6751]"
                placeholder="https://..."
              />
            </div>
          </label>
          <Field
            label="Titre de la recette"
            placeholder="Ex: Pasta Limone & Basilic"
          />
          <FormBlock title="Source">
            <FilterChips labels={platforms} defaultActive="Instagram" />
          </FormBlock>
          <Textarea
            label="Ingrédients"
            placeholder="Un ingrédient par ligne..."
          />
          <Textarea
            label="Étapes"
            placeholder="Les grandes étapes de préparation..."
          />
          <FormBlock title="Tags">
            <FilterChips labels={tags} defaultActive="Rapide" />
          </FormBlock>
          <FormBlock title="Statut">
            <FilterChips labels={statuses} defaultActive="À tester" />
          </FormBlock>
          <ActionButton label="Sauvegarder la recette" />
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-[#414943]">{label}</span>
      <input
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-full border-none bg-[#f6f3f2] px-4 text-sm ring-1 ring-transparent outline-none focus:ring-[#3d6751]"
      />
    </label>
  );
}

function Textarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-[#414943]">{label}</span>
      <textarea
        placeholder={placeholder}
        className="mt-2 min-h-28 w-full rounded-2xl border-none bg-[#f6f3f2] p-4 text-sm ring-1 ring-transparent outline-none focus:ring-[#3d6751]"
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
