export type RecipeSourcePlatform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "website"
  | "manual";

export type RecipeStatus = "to_try" | "tried" | "favorite";

export type Recipe = {
  id: string;
  title: string;
  sourceUrl?: string;
  sourcePlatform?: RecipeSourcePlatform;
  thumbnailUrl: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
  note: string;
  savedAt: string;
  status: RecipeStatus;
  createdAt: string;
};
