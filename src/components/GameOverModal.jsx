import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styled from "styled-components";

/**
 * Fullscreen overlay for modal background.
 */
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

/**
 * Main modal container.
 */
const ModalBox = styled.div`
  background: ${({ theme }) => theme.colors.tile};
  padding: 24px;
  border-radius: 12px;
  width: 320px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  animation: pop-in 0.3s ease;
`;

/**
 * Container for modal action buttons.
 */
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 16px;
`;

/**
 * Modal displayed when the game ends.
 *
 * Rendered using React Portal.
 *
 * @param {Object} props
 * @param {Object} props.results - Game result data
 * @param {boolean} props.results.success - Whether the player won
 * @param {number} props.results.time - Time spent (seconds)
 * @param {number} props.results.moves - Number of moves
 * @param {function} props.onRestart - Restart game handler
 * @param {function} props.onExit - Exit to main menu handler
 *
 * @example
 * <GameOverModal
 *   results={{ success: true, time: 120, moves: 40 }}
 *   onRestart={handleRestart}
 *   onExit={handleExit}
 * />
 */
export default function GameOverModal({ results, onRestart, onExit }) {
  return ReactDOM.createPortal(
    <Overlay>
      <ModalBox>
        {results.success ? (
          <>
            <h2>Вітаємо! Ви перемогли!</h2>
            <p>Час: {results.time} c</p>
            <p>Ходи: {results.moves}</p>
          </>
        ) : (
          <>
            <h2>Гра завершена</h2>
            <p>Плитки не зібрані правильно</p>
            <p>Час: {results.time} c</p>
            <p>Ходи: {results.moves}</p>
          </>
        )}
        <Buttons>
          <Button onClick={onRestart}>Почати заново</Button>
          <Button onClick={onExit}>Повернутись на початковий екран</Button>
        </Buttons>
      </ModalBox>
    </Overlay>,
    document.getElementById("modal-root")
  );
}
