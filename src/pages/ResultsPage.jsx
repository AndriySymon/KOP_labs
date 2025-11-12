import React from "react";
import { useGameStore } from "../store/gameStore";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  th, td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: ${({ theme }) => theme.colors.tile};
  }
`;

export default function ResultsPage() {
  const navigate = useNavigate();
  const { results } = useGameStore();

  return (
    <div className="results-page" style={{ textAlign: "center", width: "100%", maxWidth: "500px", margin: "0 auto",  }}>
      <h2>Таблиця результатів</h2>
      {results.length === 0 ? (
        <p>Ще немає зіграних ігор</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Гравець</th>
              <th>Розмір поля</th>
              <th>Час</th>
              <th>Ходи</th>
              <th>Дата</th>
              <th>Успіх</th>
              <th>Режим новачка</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i}>
                <td>{r.username}</td>
                <td>{r.sizeLabel}</td>
                <td>{r.time} c</td>
                <td>{r.moves}</td>
                <td>{r.date}</td>
                <td>{r.success ? "Так" : "Ні"}</td>
                <td>{r.beginnerMode ? "Так" : "Ні"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Button onClick={() => navigate("/")}>На головну</Button>
    </div>
  );
}
