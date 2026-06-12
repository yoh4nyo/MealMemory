import {
  CalendarDays,
  ChefHat,
  Home,
  Lightbulb,
  ListChecks,
  Settings,
  Utensils,
} from "lucide-react";

export const appName = "MealMemory";

export const navigationItems = [
  {
    label: "Tableau",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Calendrier",
    href: "/calendar",
    icon: CalendarDays,
  },
  {
    label: "Repas",
    href: "/meals",
    icon: Utensils,
  },
  {
    label: "Recettes",
    href: "/recipes",
    icon: ChefHat,
  },
  {
    label: "Idées",
    href: "/ideas",
    icon: Lightbulb,
  },
  {
    label: "Liste",
    href: "/shopping-list",
    icon: ListChecks,
  },
  {
    label: "Réglages",
    href: "/settings",
    icon: Settings,
  },
] as const;

export const filterLabels = [
  "Tout",
  "Rapide",
  "Favori",
  "Pas mangé récemment",
  "Week-end",
  "Pâtes",
  "Poulet",
] as const;

export const categoryLabels = {
  home: "Fait maison",
  takeaway: "À emporter",
  restaurant: "Restaurant",
} as const;
