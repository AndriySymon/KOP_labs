import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styled from "styled-components";

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

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 16px;
`;

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
