import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import styled from "styled-components";

const Input = styled.input`
  margin: 10px 0;
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 80%;
  text-align: center;
  outline: none;
  background-color: ${({ theme }) => theme.colors.tile};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export default function StartPage() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "" );
  const navigate = useNavigate();

  const handleStart = () => {
    if (!username.trim()) {
      alert("Введіть ім’я перед початком гри!");
      return;
    }
    localStorage.setItem("username", username);
    navigate(`/game/${encodeURIComponent(username)}`);
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  const handleResults = () => {
    navigate("/results");
  };


  return (
    <Layout title="П’ятнашки">
      <p>Введіть своє ім’я та натисніть, щоб розпочати гру!</p>
      <Input
        className="username-input"
        type="text"
        placeholder="Ваше ім’я"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <ButtonGroup>
        <Button onClick={handleStart}>Почати гру</Button>
        <Button onClick={handleSettings}>Налаштування</Button>
        <Button onClick={handleResults}>Результати</Button>
      </ButtonGroup>
    </Layout>
  );
}