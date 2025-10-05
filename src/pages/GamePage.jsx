import React from "react";
import Layout from "../components/Layout";
import Board from "../components/Board";
import Button from "../components/Button";

export default function GamePage({ onFinish }) {
  return (
    <Layout title="Гра П’ятнашки">
      <Board />
      <div style={{ marginTop: "20px" }}>
        <Button onClick={onFinish}>Завершити гру</Button>
      </div>
    </Layout>
  );
}