"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarPlus, Clock, Eye, X } from "lucide-react";

import { ActionButton } from "@/components/ui/action-button";

type MealSuggestionCardProps = {
  suggestion: {
    id: string;
    label: string;
    mealName: string;
    prepTime: string;
    reason: string;
    imageUrl: string;
  };
};

export function MealSuggestionCard({ suggestion }: MealSuggestionCardProps) {
  const [hidden, setHidden] = useState(false);

  if (hidden) {
    return null;
  }

  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-[#e4e2e1] bg-white shadow-[0_10px_30px_rgba(51,51,51,0.05)]">
      <div className="relative h-56">
        <Image
          src={suggestion.imageUrl}
          alt={suggestion.mealName}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-[#92001c] backdrop-blur">
          {suggestion.label}
        </span>
      </div>
      <div className="space-y-4 p-5">
        <div>
          <h2 className="font-heading text-2xl font-bold text-[#1b1c1c]">
            {suggestion.mealName}
          </h2>
          <p className="mt-2 flex items-center gap-2 text-sm font-bold text-[#717973]">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {suggestion.prepTime}
          </p>
        </div>
        <p className="rounded-2xl bg-[#f6f3f2] px-4 py-3 text-sm leading-6 text-[#414943]">
          {suggestion.reason}
        </p>
        <div className="flex flex-wrap gap-2">
          <ActionButton
            label="Ajouter au calendrier"
            icon={CalendarPlus}
            className="flex-1"
          />
          <ActionButton
            href="/recipes"
            label="Voir la recette"
            icon={Eye}
            variant="ghost"
          />
          <ActionButton
            label="Pas ce soir"
            icon={X}
            variant="tomato"
            onClick={() => setHidden(true)}
          />
        </div>
      </div>
    </article>
  );
}
