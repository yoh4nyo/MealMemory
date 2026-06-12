"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import { ActionButton } from "@/components/ui/action-button";
import { shoppingListItems } from "@/data/shopping-list";
import type { ShoppingListCategory } from "@/types/shopping-list";

const categories: ShoppingListCategory[] = [
  "Légumes",
  "Viande & Poisson",
  "Produits frais",
  "Épicerie",
  "Autre",
];

export function ShoppingList() {
  const [items, setItems] = useState(shoppingListItems);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        <ActionButton label="Ajouter un article" icon={Plus} />
        <ActionButton
          label="Effacer cochés"
          icon={Trash2}
          variant="ghost"
          onClick={() =>
            setItems((current) => current.filter((item) => !item.checked))
          }
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {categories.map((category) => (
          <section
            key={category}
            className="rounded-[1.5rem] border border-[#e4e2e1] bg-white p-5 shadow-[0_10px_30px_rgba(51,51,51,0.05)]"
          >
            <h2 className="font-heading text-xl font-bold text-[#1b1c1c]">
              {category}
            </h2>
            <div className="mt-4 space-y-3">
              {items
                .filter((item) => item.category === category)
                .map((item) => (
                  <label
                    key={item.id}
                    className="flex cursor-pointer items-center gap-3 rounded-2xl bg-[#f6f3f2] px-4 py-3 text-sm font-bold text-[#414943]"
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() =>
                        setItems((current) =>
                          current.map((candidate) =>
                            candidate.id === item.id
                              ? { ...candidate, checked: !candidate.checked }
                              : candidate,
                          ),
                        )
                      }
                      className="h-5 w-5 rounded border-[#c1c8c1] text-[#3d6751]"
                    />
                    <span
                      className={
                        item.checked ? "text-[#717973] line-through" : ""
                      }
                    >
                      {item.label}
                    </span>
                  </label>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
