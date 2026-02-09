import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultsPage from "./pages/ResultsPage";
import SettingsPage from "./pages/SettingsPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import CookieConsent from "react-cookie-consent";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CookieConsent
        location="bottom"
        enableDeclineButton
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="fifteenPuzzleCookieConsent"
        style={{ background: "#1f1f1f" }}
        buttonStyle={{ color: "#000", fontSize: "14px" }}
        declineButtonStyle={{ fontSize: "14px" }}
        expires={150}
      >
        This website uses cookies to improve user experience and complies with
        GDPR regulations.
      </CookieConsent>
        <BrowserRouter>
          <div className="app">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/game/:username" element={<GamePage />} />
              <Route path="/results" element={<ResultsPage />} />
            </Routes>
          </div>
        </BrowserRouter>
</ThemeProvider>
  );
}