import { create } from "zustand";

export const useGameStore = create((set) => ({
  settings: JSON.parse(localStorage.getItem("gameSettings")) || {
    difficulty: "normal",
    beginnerMode: false,
  },
  results: JSON.parse(localStorage.getItem("gameResults")) || [],

  setSettings: (newSettings) => {
    localStorage.setItem("gameSettings", JSON.stringify(newSettings));
    set({ settings: newSettings });
  },

  addResult: (result) =>
    set((state) => {
      const updatedResults = [...state.results, result];
      localStorage.setItem("gameResults", JSON.stringify(updatedResults));
      return { results: updatedResults };
    }),
}));
