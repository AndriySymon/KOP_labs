import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

export default function GameOverModal({ results, onRestart, onExit }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
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
        <div className="modal-buttons">
          <Button onClick={onRestart}>Почати заново</Button>
          <Button onClick={onExit}>Повернутись на початковий екран</Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
