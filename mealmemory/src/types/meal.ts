export type MealType = "breakfast" | "lunch" | "dinner" | "snack";

export type MealCategory = "home" | "takeaway" | "restaurant";

export type MealRating = "loved" | "good" | "okay" | "not_again";

export type Meal = {
  id: string;
  name: string;
  date: string;
  mealType: MealType;
  category?: MealCategory;
  imageUrl: string;
  prepTime: string;
  ratingScore: number;
  lastEaten: string;
  timesThisMonth: number;
  favorite?: boolean;
  photoUrl?: string;
  tags: string[];
  rating?: MealRating;
  notes?: string;
  history?: {
    date: string;
    context: string;
    score: number;
  }[];
  createdAt: string;
};

export type CalendarMeal = {
  id: string;
  day: number;
  dateLabel: string;
  title: string;
  mealType: "midi" | "soir";
  category: MealCategory;
  imageUrl?: string;
  meta?: string;
};
