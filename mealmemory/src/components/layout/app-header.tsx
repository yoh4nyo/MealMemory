import Image from "next/image";
import Link from "next/link";
import { PlusCircle, Settings } from "lucide-react";

import { appName } from "@/lib/constants";

const avatarUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAHqaARhgDWtdiN5uiWOe0CE5rzEL4k2RWF819PGjlyCc5-25K7mjBLRhupcyQnPKO3-DY2H5pbRaK6opBmyV8DJI6punuDwwRqZm67aYN8ZTbgfCFLUD04MX4iuupBpFhvnovFzLq2a_t70va4MZsbdbWeJ-0wbC6aWvQvPjPyw2D616PqRgbIbmIMAKg4qygjJhjB-wWsmldd-coqNX0nj2Nkug1tvitJVme6Ar4TG-hHuRSt2JrmdENsyLDjQbFG4wWodZFcrY4";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e4e2e1] bg-[#fbf9f8]/92 px-4 py-4 shadow-sm backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <Link href="/dashboard" className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-[#bfedd1] shadow-sm">
            <Image
              src={avatarUrl}
              alt="Famille MealMemory"
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
          <div>
            <p className="font-heading text-xl font-bold text-[#3d6751]">
              {appName}
            </p>
            <p className="hidden text-sm text-[#717973] sm:block">
              Les repas de la famille, bien gardés.
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/meals/new"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#3d6751] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#345d48]"
          >
            <PlusCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Ajouter un repas</span>
            <span className="sm:hidden">Ajouter</span>
          </Link>
          <Link
            href="/settings"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#3d6751] transition hover:bg-[#f0eded]"
            aria-label="Réglages"
          >
            <Settings className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
