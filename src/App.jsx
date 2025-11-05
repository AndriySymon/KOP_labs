import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import { useNavigation } from "./hooks/useNavigation";
import { SettingsProvider } from "./context/SettingsContext";
import SettingsPage from "./pages/SettingsPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SettingsProvider>
        <BrowserRouter>
          <div className="app">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/game/:username" element={<GamePage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </SettingsProvider>
</ThemeProvider>
  );
}