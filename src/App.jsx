import React from "react";
import { useState } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultsPage from "./pages/ResultsPage";
import "./index.css";

function App() {
  const [page, setPage] = useState("start");

  const goTo = (p) => setPage(p);

  return (
    <div className="app">
      {page === "start" && <StartPage onStart={() => goTo("game")} />}
      {page === "game" && <GamePage onFinish={() => goTo("results")} />}
      {page === "results" && <ResultsPage onRestart={() => goTo("start")} />}
    </div>
  );
}

export default App;