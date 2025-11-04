import React, {useState} from "react";
import { useGameLogic } from "../hooks/useGameLogic";
import { useTimer } from "../hooks/useTimer";
import Layout from "../components/Layout";
import Board from "../components/Board";
import Button from "../components/Button";
import GameOverModal from "../components/GameOverModal";

export default function GamePage({ onFinish, onExit }) {
  const { tiles, moves, gameStatus, startGame, moveTile, size } = useGameLogic();
  const isActive = gameStatus === "playing";
  const { seconds, reset, stop } = useTimer(isActive);
  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState(null);

  React.useEffect(() => {
    startGame();
    reset();
  }, []);

  React.useEffect(() => {
    if (gameStatus === "finished") {
      stop();
      const res = { success: true, time: seconds, moves };
      setResults(res);
      setShowModal(true);
    }
  }, [gameStatus]);

  const handleFinishClick = () => {
    stop();
    const res = { success: false, time: seconds, moves };
    setResults(res);
    setShowModal(true);
  };

  return (
    <div className="game-page">
      <h2>Рахунок: {moves}</h2>
      <h3>Час: {seconds} c</h3>
      <Board tiles={tiles} onTileClick={moveTile} size={size} />
      <Button onClick={handleFinishClick}>Завершити</Button>

      {showModal && (
        <GameOverModal
          results={results}
          onRestart={() => { startGame(); reset(); setShowModal(false); }}
          onExit={() => {setShowModal(false); onExit()}}
        />
      )}
    </div>
  );
}