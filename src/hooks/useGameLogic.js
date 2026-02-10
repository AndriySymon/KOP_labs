import { useState, useEffect } from "react";
import { useGameStore } from "../store/gameStore";

/**
 * Custom hook that manages the core game logic of the Fifteen Puzzle.
 *
 * Responsibilities:
 * - determines board size based on difficulty
 * - initializes a solvable or randomized game board
 * - handles tile movement
 * - counts player moves
 * - detects game completion
 * - manages game status lifecycle
 *
 * @returns {Object} Game logic API
 * @returns {Array<number|null>} tiles Current state of the game board
 * @returns {number} moves Number of moves made by the player
 * @returns {string} gameStatus Current game status ("idle" | "playing" | "finished")
 * @returns {Function} startGame Initializes and starts a new game
 * @returns {Function} moveTile Handles tile movement by index
 * @returns {number} size Board size (3x3, 4x4 or 5x5)
 */
export function useGameLogic() {
  /**
   * Game settings retrieved from global Zustand store.
   * @type {{ difficulty: string, beginnerMode: boolean }}
   */
  const { settings } = useGameStore();
  /**
   * Current state of the game board.
   * @type {[Array<number|null>, Function]}
   */
  const [tiles, setTiles] = useState([]);
  /**
   * Number of moves made by the player.
   * @type {[number, Function]}
   */
  const [moves, setMoves] = useState(0);
  /**
   * Current game status.
   * Possible values: "idle", "playing", "finished"
   * @type {[string, Function]}
   */
  const [gameStatus, setGameStatus] = useState("idle");

  /**
   * Board size based on selected difficulty.
   * easy -> 3x3
   * normal -> 4x4
   * hard -> 5x5
   * @type {number}
   */
  const size =
    settings.difficulty === "easy"
      ? 3
      : settings.difficulty === "hard"
      ? 5
      : 4;

  /**
  * Total number of tiles on the board.
  * @type {number}
  */
  const totalTiles = size * size;

  // Ініціалізація гри
  /**
   * Initializes and starts a new game.
   *
   * In beginner mode, the board is generated from a solved state
   * using a limited number of valid moves to ensure solvability.
   *
   * In normal mode, tiles are shuffled randomly.
   */
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
  /**
   * Checks win condition whenever tiles change.
   * The game is considered finished when all tiles
   * are in correct ascending order.
   */
  useEffect(() => {
    if (tiles.length === totalTiles) {
      const isWin = tiles.slice(0, totalTiles - 1).every((t, i) => t === i + 1);
      if (isWin && gameStatus === "playing") {
        setGameStatus("finished");
      }
    }
  }, [tiles, gameStatus]);

  // Логіка переміщення плитки
  /**
   * Handles tile movement logic.
   * A tile can be moved only if it is adjacent
   * to the empty cell (horizontally or vertically).
   *
   * @param {number} index Index of the clicked tile
   */
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