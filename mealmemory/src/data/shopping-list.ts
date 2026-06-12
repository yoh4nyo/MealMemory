import type { ShoppingListItem } from "@/types/shopping-list";

export const shoppingListItems: ShoppingListItem[] = [
  {
    id: "courgettes",
    label: "Courgettes",
    category: "Légumes",
    checked: false,
  },
  { id: "potimarron", label: "Potimarron", category: "Légumes", checked: true },
  {
    id: "poulet",
    label: "Poulet fermier",
    category: "Viande & Poisson",
    checked: false,
  },
  {
    id: "saumon",
    label: "Filets de saumon",
    category: "Viande & Poisson",
    checked: false,
  },
  {
    id: "halloumi",
    label: "Halloumi",
    category: "Produits frais",
    checked: false,
  },
  {
    id: "creme",
    label: "Crème fraîche",
    category: "Produits frais",
    checked: true,
  },
  { id: "pates", label: "Linguine", category: "Épicerie", checked: false },
  { id: "quinoa", label: "Quinoa", category: "Épicerie", checked: false },
  {
    id: "serviettes",
    label: "Serviettes de table",
    category: "Autre",
    checked: false,
  },
];
