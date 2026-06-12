import Link from "next/link";
import { PlusCircle } from "lucide-react";

export function AddMealButton() {
  return (
    <Link
      href="/meals/new"
      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-700 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-800 sm:w-auto"
    >
      <PlusCircle className="h-5 w-5" aria-hidden="true" />
      Add a meal
    </Link>
  );
}
