export type ShoppingListCategory =
  | "Légumes"
  | "Viande & Poisson"
  | "Produits frais"
  | "Épicerie"
  | "Autre";

export type ShoppingListItem = {
  id: string;
  label: string;
  category: ShoppingListCategory;
  checked: boolean;
};
