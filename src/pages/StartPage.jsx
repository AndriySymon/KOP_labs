import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

export default function StartPage({ onStart, onSettings }) {
  return (
    <Layout title="П’ятнашки">
      <p>Натисніть, щоб розпочати гру!</p>
      <Button onClick={onStart}>Почати гру</Button>
      <Button onClick={onSettings}>Налаштування</Button>
    </Layout>
  );
}