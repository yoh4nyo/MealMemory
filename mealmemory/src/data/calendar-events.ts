import type { CalendarMeal } from "@/types/meal";

export const calendarMeals: CalendarMeal[] = [
  {
    id: "oct-1-poulet",
    day: 1,
    dateLabel: "1 Octobre",
    title: "Poulet rôti",
    mealType: "soir",
    category: "home",
  },
  {
    id: "oct-2-sushi",
    day: 2,
    dateLabel: "2 Octobre",
    title: "Sushi Shop",
    mealType: "soir",
    category: "takeaway",
  },
  {
    id: "oct-3-lasagnes",
    day: 3,
    dateLabel: "3 Octobre",
    title: "Lasagnes",
    mealType: "midi",
    category: "home",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXd_G73YYPxdLRS7AVC20BqCwvU8kkiOBmAljy11jjKVUpq_fyAe7TuT1mdYGk8x5EvUYPu1tdcAqmj3IAgBcKnp_4VZoxTymX-pYswhs8LXOayWipjQWJQIRJ0DkeoG6yJVCLdfyhHwmrJCye1NdUp3qsvJUIbVURFlmFvQYAcS9oraUcdOsV_GU0Epru-D_GFTYtkTdg0d1Jpy_ezsRTtlXgNPrid5_uc5rGdX8KHdeqOCUrm-5jZTCsqNz3iw_cRjATv-_7zg8",
    meta: "Fait Maison",
  },
  {
    id: "oct-5-pizzeria",
    day: 5,
    dateLabel: "5 Octobre",
    title: "Pizzéria",
    mealType: "soir",
    category: "restaurant",
  },
  {
    id: "oct-7-quiche",
    day: 7,
    dateLabel: "7 Octobre",
    title: "Quiche",
    mealType: "midi",
    category: "home",
  },
  {
    id: "oct-10-salade",
    day: 10,
    dateLabel: "10 Octobre",
    title: "Salade César",
    mealType: "midi",
    category: "home",
  },
];

export const calendarDays = [
  25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];
