import { useState, useEffect } from "react";
import { useSettings } from "../context/SettingsContext";

export function useGameLogic() {
  const { settings } = useSettings();
  const [tiles, setTiles] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameStatus, setGameStatus] = useState("idle");

  const size =
    settings.difficulty === "easy"
      ? 3
      : settings.difficulty === "hard"
      ? 5
      : 4;

  const totalTiles = size * size;

  // Ініціалізація гри
  const startGame = () => {
    let generated = Array.from({ length: totalTiles - 1 }, (_, i) => i + 1);
    generated.push(null);

    if (settings.beginnerMode) {
      // режим для новачка
      for (let i = 0; i < 10; i++) {
        const emptyIndex = generated.indexOf(null);
        const possibleMoves = [];

        const row = Math.floor(emptyIndex / size);
        const col = emptyIndex % size;

        if (row > 0) possibleMoves.push(emptyIndex - size);
        if (row < size - 1) possibleMoves.push(emptyIndex + size);
        if (col > 0) possibleMoves.push(emptyIndex - 1);
        if (col < size - 1) possibleMoves.push(emptyIndex + 1);

        const moveIndex =
          possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        [generated[emptyIndex], generated[moveIndex]] = [
          generated[moveIndex],
          generated[emptyIndex],
        ];
      }
    } else {
      //звичайний режим
      generated = generated.sort(() => Math.random() - 0.5);
    }
    setTiles(generated);
    setMoves(0);
    setGameStatus("playing");
  };

  // Перевірка виграшу
  useEffect(() => {
    if (tiles.length === totalTiles) {
      const isWin = tiles.slice(0, totalTiles - 1).every((t, i) => t === i + 1);
      if (isWin && gameStatus === "playing") {
        setGameStatus("finished");
      }
    }
  }, [tiles, gameStatus]);

  // Логіка переміщення плитки
  const moveTile = (index) => {
    const emptyIndex = tiles.indexOf(null);

    const row = Math.floor(index / size);
    const col = index % size;
    const emptyRow = Math.floor(emptyIndex / size);
    const emptyCol = emptyIndex % size;

    // Перевіряємо, чи сусідні клітинки (по вертикалі або горизонталі)
    const isAdjacent =
      (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
      (col === emptyCol && Math.abs(row - emptyRow) === 1);

    if (isAdjacent) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
      setTiles(newTiles);
      setMoves((m) => m + 1);
    }
  };

  return {
    tiles,
    moves,
    gameStatus,
    startGame,
    moveTile,
    size,
  };
}