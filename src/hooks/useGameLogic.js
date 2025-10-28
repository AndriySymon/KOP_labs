import { useState, useEffect } from "react";

export function useGameLogic() {
  const [tiles, setTiles] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameStatus, setGameStatus] = useState("idle");

  // Ініціалізація гри
  const startGame = () => {
    const shuffled = Array.from({ length: 15 }, (_, i) => i + 1)
      .sort(() => Math.random() - 0.5);
    setTiles([...shuffled, null]); 
    setMoves(0);
    setGameStatus("playing");
  };

  // Перевірка виграшу
  useEffect(() => {
    if (tiles.length === 16) {
      const isWin = tiles.slice(0, 15).every((t, i) => t === i + 1);
      if (isWin && gameStatus === "playing") {
        setGameStatus("finished");
      }
    }
  }, [tiles, gameStatus]);

  // Логіка переміщення плитки
  const moveTile = (index) => {
    const emptyIndex = tiles.indexOf(null);

    const row = Math.floor(index / 4);
    const col = index % 4;
    const emptyRow = Math.floor(emptyIndex / 4);
    const emptyCol = emptyIndex % 4;

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
  };
}