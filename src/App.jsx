import React from "react";
import { useState } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultsPage from "./pages/ResultsPage";
import "./index.css";
import { useNavigation } from "./hooks/useNavigation";

function App() {
  const { page, goToStart, goToGame, goToResults } = useNavigation();
  const [results, setResults] = useState({success: false, time: 0, moves: 0});

  const handleFinish = (res) => {
    setResults(res);
    goToResults();
  };

  return (
    <div className="app">
      {page === "start" && <StartPage onStart={goToGame} />}
      {page === "game" && <GamePage onFinish={handleFinish} />}
      {page === "results" && <ResultsPage onRestart={goToStart} results={results} />}
    </div>
  );
}

export default App;