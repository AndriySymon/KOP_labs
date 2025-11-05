import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGameLogic } from "../hooks/useGameLogic";
import { useTimer } from "../hooks/useTimer";
import Layout from "../components/Layout";
import Board from "../components/Board";
import Button from "../components/Button";
import GameOverModal from "../components/GameOverModal";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  width: 320px;
  margin: 0 auto;
`;

const Stats = styled.div`
  margin-bottom: 16px;
  h2, h3 {
    margin: 4px 0;
  }
`;

export default function GamePage() {
  const { username } = useParams();
  const navigate = useNavigate();
  const { tiles, moves, gameStatus, startGame, moveTile, size } = useGameLogic();
  const { seconds, reset, stop } = useTimer(gameStatus === "playing");

  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    startGame();
    reset();
  }, []);

  useEffect(() => {
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
    <Wrapper>
      <Stats>
        <h2>Гравець: {username}</h2>
        <h3>Рахунок: {moves}</h3>
        <h3>Час: {seconds} c</h3>
      </Stats>

      <Board tiles={tiles} onTileClick={moveTile} size={size} />
      <Button onClick={handleFinishClick}>Завершити</Button>

      {showModal && (
        <GameOverModal
          results={results}
          onRestart={() => {
            startGame();
            reset();
            setShowModal(false);
          }}
          onExit={() => navigate("/")}
        />
      )}
    </Wrapper>
  );
}