import type { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: "salade-zen-halloumi",
    title: "Salade Zen & Halloumi",
    sourcePlatform: "instagram",
    sourceUrl: "https://instagram.com/",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvCnVd9F5tFtkTczoXf0xcvjmied1fWSrtPIF9SRpz8gZ55CD5ywb6ib8_mYjlOiXqBNL5EL44Ei8835mwYUuXYff-ijq_wCMnoG4zphpilppX0bz4ldKucj7fESybfPOuv5IOvbH9vOnxr09osnR1AWHVg4K59jEKC-uDOwsGMyTD3jRy44ckMZcKWUskLstQN_2MY2TMbvv_vgRL10fm1kUYyRQnLTfZqxh0jMjMoCS87CuLgJ8BGGl4Ogc-lhFIHGQqilEwdIg",
    ingredients: ["Halloumi", "Salade croquante", "Radis", "Citron"],
    steps: ["Griller le halloumi", "Assembler la salade", "Servir tiède"],
    tags: ["Rapide", "Veggie"],
    note: "Une recette ultra rapide pour les soirs de flemme. Le halloumi grillé change tout !",
    savedAt: "Enregistré le 12 Oct.",
    status: "to_try",
    createdAt: "2026-06-01T10:00:00.000Z",
  },
  {
    id: "pasta-limone",
    title: "Pasta Limone & Basilic",
    sourcePlatform: "tiktok",
    sourceUrl: "https://tiktok.com/",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDul-cdpfv7c24RLMA4qJ22ikEhIY_ez0LzmhQy_Ytm86oxi5CpSRaNnP89uk3J_MrBaozjPOW2W4dZPEy8JstnQMtU05UipH-AkEFziCWd19_bAGtO9mXl-nKbNNTHTsxJVtdHskjm5yqQCS9SrcPSsNGXBUiXLZToQI9B0GF0Vhb4VMK9HsDX9c1z0zn03jK4czYhvek6JAX9eCk-6jeLxyTEf2gkekgRLsjyHrYKCLmef3u6oXO1P47JNwbGEpX4yqb2ETHwE1M",
    ingredients: ["Spaghetti", "Citron", "Basilic", "Parmesan"],
    steps: ["Cuire les pâtes", "Monter la sauce citron", "Mélanger hors feu"],
    tags: ["Enfants", "Pâtes"],
    note: "Validé par toute la famille ! Attention à ne pas trop cuire le citron.",
    savedAt: "Enregistré le 5 Oct.",
    status: "tried",
    createdAt: "2026-06-02T10:00:00.000Z",
  },
  {
    id: "fondant-baulois",
    title: "Fondant Baulois Maison",
    sourcePlatform: "youtube",
    sourceUrl: "https://youtube.com/",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQSQRw2ls3q9xyaPIIMRrnGaU87iZqH4sfXD89p15pXbpf_jd6Dz24shrLhEb5HhQXV-kGu7zNaoxG2GRc5zW_1Pq8RZWfVyES-SDQS0bX2IBZCUJbfK6G-1fkptmqcmLRkPgU9jz_9sFKn9XE6UvZOY7qMwWePhpWGk_4uOwaJQAsHVplPYV_q9uLy8M-Ba_XBYJQV0-pTNQjsr8kbZRBcqBi3fJEKeWDmL1SbSWBZkr3C4HKIh2dodiihFxnaLfMykbZ2oMDye8",
    ingredients: ["Chocolat noir", "Beurre salé", "Sucre", "Œufs"],
    steps: ["Faire fondre", "Mélanger doucement", "Cuire à basse température"],
    tags: ["Dessert"],
    note: "La vraie recette avec le beurre salé. Pour l'anniversaire de Léo.",
    savedAt: "Enregistré hier",
    status: "to_try",
    createdAt: "2026-06-03T10:00:00.000Z",
  },
  {
    id: "quiche-poireaux",
    title: "Quiche aux Poireaux",
    sourcePlatform: "website",
    sourceUrl: "https://marmiton.org/",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBusumLxVXOp3R1ZnLeMFDkf0i_iXm2h_9yUunJGg4YW7ugUO_9XNSlrFtE6sVVxjbBKsGEZY3QxUfMXqKkqx1Ih3b138cInnfLaTmYP_S4_2KBlC5Ho2zUsnhPNN35hPyOUGZAwXqVVZyeh2tSzGvS8JbBdrRljE-C_3z8STvYN3rX7d3MrdKxAv6ProniCsS9kx2rsGBNDvz_8APhecOCCFDiMpfQJszOInRaiOIQsEn7mGjrw4v4jWXmb5hXXD-Ohdzz2gsrNJA",
    ingredients: ["Poireaux", "Pâte brisée", "Crème", "Œufs"],
    steps: ["Fondre les poireaux", "Garnir la pâte", "Cuire jusqu'à doré"],
    tags: ["Classique", "Four"],
    note: "Recette de base du blog Marmiton, ajoutée manuellement.",
    savedAt: "Enregistré le 22 Sept.",
    status: "tried",
    createdAt: "2026-06-04T10:00:00.000Z",
  },
];
