import React from "react";
import { useState } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import "./index.css";
import { useNavigation } from "./hooks/useNavigation";
import { SettingsProvider } from "./context/SettingsContext";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const { page, goToStart, goToGame, goToSettings } = useNavigation();
  const [results, setResults] = useState({success: false, time: 0, moves: 0});

  const handleFinish = (res) => {
    setResults(res);
  };

  return (
    <SettingsProvider>
    <div className="app">
      {page === "start" && <StartPage onStart={goToGame} onSettings={goToSettings} />}
      {page === "settings" && <SettingsPage onBack={goToStart} />}
      {page === "game" && <GamePage onFinish={handleFinish} onExit={goToStart} />}
    </div>
    </SettingsProvider>
  );
}

export default App;