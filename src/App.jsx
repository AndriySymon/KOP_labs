import React from "react";
import { useState } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultsPage from "./pages/ResultsPage";
import "./index.css";
import { useNavigation } from "./hooks/useNavigation";

function App() {
  const { page, goToStart, goToGame, goToResults } = useNavigation();

  return (
    <div className="app">
      {page === "start" && <StartPage onStart={goToGame} />}
      {page === "game" && <GamePage onFinish={goToResults} />}
      {page === "results" && <ResultsPage onRestart={goToStart} />}
    </div>
  );
}

export default App;