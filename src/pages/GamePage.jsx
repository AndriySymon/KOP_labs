import React from "react";
import { useGameLogic } from "../hooks/useGameLogic";
import { useTimer } from "../hooks/useTimer";
import Layout from "../components/Layout";
import Board from "../components/Board";
import Button from "../components/Button";

export default function GamePage({ onFinish }) {
  const { tiles, moves, gameStatus, startGame, moveTile } = useGameLogic();
  const { seconds, reset } = useTimer(gameStatus === "playing");

  React.useEffect(() => {
    startGame();
    reset();
  }, []);

  React.useEffect(() => {
    if (gameStatus === "finished") {
      onFinish({success: true, time: seconds. moves});
    }
  }, [gameStatus]);

  const handleFinishClick = () => {
    if (gameStatus === "playing") {
      onFinish({success: false, time: seconds, moves});
    }
  };

  return (
    <div className="game-page">
      <h2>Рахунок: {moves}</h2>
      <h3>Час: {seconds} c</h3>
      <Board tiles={tiles} onTileClick={moveTile} />
      <Button onClick={handleFinishClick}>Завершити</Button>
    </div>
  );
}