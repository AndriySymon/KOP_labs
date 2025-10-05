import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

export default function ResultsPage({ onRestart }) {
  return (
    <Layout title="Результати">
      <p>Ваш результат: 00:00</p>
      <Button onClick={onRestart}>Повернутись на старт</Button>
    </Layout>
  );
}