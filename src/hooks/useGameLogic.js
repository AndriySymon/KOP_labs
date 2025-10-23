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

  useEffect(() => {
    const isWin = tiles.slice(0, 15).every((t, i) => t === i + 1);
    if (isWin && gameStatus === "playing") {
      setGameStatus("finished");
    }
  }, [tiles]);

  const moveTile = (index) => {
    const emptyIndex = tiles.indexOf(null);
    const isAdjacent =
      [1, -1, 4, -4].some(
        (offset) => index + offset === emptyIndex
      );

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
