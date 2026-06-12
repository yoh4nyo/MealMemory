import Image from "next/image";
import { Camera, Globe, PlayCircle, Video } from "lucide-react";

import type { Recipe, RecipeSourcePlatform } from "@/types/recipe";

const platformLabels: Record<RecipeSourcePlatform, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
  website: "Lien Web",
  manual: "Manuel",
};

const platformIcons = {
  instagram: Camera,
  tiktok: Video,
  youtube: PlayCircle,
  website: Globe,
  manual: Globe,
};

const statusLabels: Record<Recipe["status"], string> = {
  to_try: "À TESTER",
  tried: "DÉJÀ FAIT",
  favorite: "FAVORI",
};

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  const platform = recipe.sourcePlatform ?? "manual";
  const Icon = platformIcons[platform];

  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-[#e4e2e1] bg-white shadow-[0_10px_30px_rgba(51,51,51,0.05)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(51,51,51,0.08)]">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={recipe.thumbnailUrl}
          alt={recipe.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-lg bg-white/92 px-3 py-1 text-xs font-bold text-[#1b1c1c] backdrop-blur">
          <Icon className="h-4 w-4" aria-hidden="true" />
          {platformLabels[platform]}
        </span>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-heading text-xl font-bold text-[#1b1c1c]">
            {recipe.title}
          </h2>
          <span className="rounded bg-[#bfedd1]/40 px-2 py-1 text-[0.65rem] font-black tracking-wide text-[#254f3a]">
            {statusLabels[recipe.status]}
          </span>
        </div>
        <p className="text-sm leading-6 text-[#717973]">{recipe.note}</p>
        <div className="border-t border-[#e4e2e1] pt-3 text-xs font-bold text-[#717973]">
          {recipe.savedAt}
        </div>
        <div className="flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span key={tag} className="text-xs font-bold text-[#3d6751]">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
