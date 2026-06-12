"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

import { CalendarDayCell } from "@/components/calendar/calendar-day-cell";
import { DayMealPanel } from "@/components/calendar/day-meal-panel";
import { ActionButton } from "@/components/ui/action-button";
import { calendarDays, calendarMeals } from "@/data/calendar-events";

const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const viewModes = ["Mois", "Semaine", "Liste"];

export function CalendarGrid() {
  const [selectedDay, setSelectedDay] = useState(3);
  const [viewMode, setViewMode] = useState("Mois");

  const selectedMeals = useMemo(
    () => calendarMeals.filter((meal) => meal.day === selectedDay),
    [selectedDay],
  );

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
      <section className="overflow-hidden rounded-[1.5rem] border border-[#e4e2e1] bg-white shadow-[0_10px_35px_rgba(51,51,51,0.05)]">
        <div className="flex flex-col gap-4 border-b border-[#e4e2e1] bg-[#f6f3f2] p-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <h1 className="font-heading text-3xl font-bold text-[#1b1c1c]">
              Octobre 2023
            </h1>
            <div className="flex gap-1">
              <button
                type="button"
                className="rounded-full p-2 text-[#414943] hover:bg-white"
                aria-label="Mois précédent"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="rounded-full p-2 text-[#414943] hover:bg-white"
                aria-label="Mois suivant"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedDay(3)}
              className="h-10 rounded-full bg-white px-4 text-sm font-bold text-[#3d6751] ring-1 ring-[#e4e2e1]"
            >
              Aujourd’hui
            </button>
            <ActionButton
              href="/meals/new"
              label="Ajouter un repas"
              icon={Plus}
              className="h-10"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex rounded-full bg-[#f0eded] p-1">
              {viewModes.map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setViewMode(mode)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    viewMode === mode
                      ? "bg-[#3d6751] text-white"
                      : "text-[#717973] hover:bg-white"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-[#717973]">
              <Legend color="bg-[#a8d5ba]" label="Fait maison" />
              <Legend color="bg-[#ffb3b1]" label="À emporter" />
              <Legend color="bg-[#8fbcd4]" label="Restaurant" />
            </div>
          </div>

          <div className="grid grid-cols-7 overflow-hidden rounded-xl border border-[#e4e2e1]">
            {weekDays.map((day) => (
              <div
                key={day}
                className="bg-[#f6f3f2] py-3 text-center text-xs font-black text-[#717973] uppercase"
              >
                {day}
              </div>
            ))}
            {calendarDays.map((day, index) => (
              <CalendarDayCell
                key={`${day}-${index}`}
                day={day}
                muted={index < 6}
                today={day === 3}
                selected={day === selectedDay}
                meals={calendarMeals.filter((meal) => meal.day === day)}
                onSelect={setSelectedDay}
              />
            ))}
          </div>
        </div>
      </section>

      <DayMealPanel
        dateLabel={`${selectedDay} Octobre`}
        meals={selectedMeals}
      />
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
      {label}
    </span>
  );
}
