import { Bell, Heart, Settings, Users } from "lucide-react";

import { PageHeader } from "@/components/ui/page-header";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Réglages"
        description="Profil familial, préférences de repas et futurs réglages de compte."
      />
      <section className="grid gap-5 lg:grid-cols-2">
        <SettingsCard
          icon={Users}
          title="Famille Martin"
          items={["Alice", "Nico", "Léo", "Mila"]}
        />
        <SettingsCard
          icon={Heart}
          title="Cuisines favorites"
          items={["Italien", "Méditerranéen", "Japonais", "Cuisine maison"]}
        />
        <SettingsCard
          icon={Settings}
          title="Ingrédients peu aimés"
          items={["Coriandre", "Fenouil", "Trop épicé"]}
        />
        <SettingsCard
          icon={Bell}
          title="Rappels"
          items={[
            "Planifier le dîner à 17h",
            "Bilan du dimanche",
            "Photos de repas",
          ]}
        />
      </section>
      <section className="rounded-[1.5rem] border border-[#e4e2e1] bg-white p-5 shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
        <h2 className="font-heading text-2xl font-bold">Compte</h2>
        <p className="mt-2 text-sm leading-6 text-[#717973]">
          L’authentification et les réglages Supabase seront ajoutés dans une
          prochaine étape.
        </p>
      </section>
    </div>
  );
}

function SettingsCard({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Users;
  title: string;
  items: string[];
}) {
  return (
    <article className="rounded-[1.5rem] border border-[#e4e2e1] bg-white p-5 shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
      <Icon className="h-7 w-7 text-[#3d6751]" aria-hidden="true" />
      <h2 className="font-heading mt-3 text-2xl font-bold">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-[#f6f3f2] px-3 py-1 text-sm font-bold text-[#414943]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
