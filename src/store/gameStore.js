import { create } from "zustand";

/**
 * Global application store implemented using Zustand.
 *
 * Responsibilities:
 * - stores game settings
 * - stores game results history
 * - persists data in localStorage
 *
 * This store allows accessing and modifying global state
 * from any component or hook in the application.
 *
 * @returns {Object} Zustand store API
 */
export const useGameStore = create((set) => ({
  /**
   * Game settings.
   *
   * @type {{
   *   difficulty: "easy" | "normal" | "hard",
   *   beginnerMode: boolean
   * }}
   */
  settings: JSON.parse(localStorage.getItem("gameSettings")) || {
    difficulty: "normal",
    beginnerMode: false,
  },
  /**
   * List of all game results.
   *
   * @type {Array<{
   *   username: string,
   *   boardSize: number,
   *   beginnerMode: boolean,
   *   time: number,
   *   moves: number,
   *   date: string,
   *   success: boolean
   * }>}
   */
  results: JSON.parse(localStorage.getItem("gameResults")) || [],

  /**
   * Updates game settings and persists them in localStorage.
   *
   * @param {{
   *   difficulty: "easy" | "normal" | "hard",
   *   beginnerMode: boolean
   * }} newSettings New game settings
   */
  setSettings: (newSettings) => {
    localStorage.setItem("gameSettings", JSON.stringify(newSettings));
    set({ settings: newSettings });
  },

  /**
   * Adds a new game result to the history and persists it.
   *
   * @param {Object} result Game result object
   */
  addResult: (result) =>
    set((state) => {
      const updatedResults = [...state.results, result];
      localStorage.setItem("gameResults", JSON.stringify(updatedResults));
      return { results: updatedResults };
    }),
}));
