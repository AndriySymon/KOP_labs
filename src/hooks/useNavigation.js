import { useState } from "react";

export function useNavigation() {
  const [page, setPage] = useState("start");

  const goToStart = () => setPage("start");
  const goToGame = () => setPage("game");
  const goToSettings = () => setPage("settings");

  return { page, goToStart, goToGame, goToSettings };
}