import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

export default function ResultsPage({ onRestart, results }) {
  return (
    <div className="results-page">
      {results.success ? (
        <>
          <h2>Вітаємо! Ви зібрали всі плитки</h2>
          <p>Кількість ходів: {results.moves}</p>
          <p>Час гри: {results.time} секунд</p>
        </>
      ) : (
        <>
          <h2>Гра завершена!</h2>
          <p>Плитки не зібрані правильно</p>
          <p>Кількість ходів: {results.moves}</p>
          <p>Час гри: {results.time} секунд</p>
        </>
      )}
      <Button onClick={onRestart}>Почати заново</Button>
    </div>
  );
}