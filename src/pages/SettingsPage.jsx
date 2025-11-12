import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";
import Button from "../components/Button";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 250px;
  margin: 0 auto;
  text-align: left;
`;

const Select = styled.select`
  background: ${({ theme }) => theme.colors.tile};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 8px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 6px;
  display: grid;
  place-content: center;
  background: transparent;
  transition: all 0.2s ease;

  &:checked {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.accent};
  }

  &:checked::after {
    content: "✓";
    color: white;
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export default function SettingsPage() {
  const { settings, setSettings } = useGameStore();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: settings,
    validationSchema: Yup.object({
      difficulty: Yup.string().required("Оберіть рівень складності"),
      beginnerMode: Yup.boolean(),
    }),
    onSubmit: (values) => {
      setSettings(values);
      navigate("/");
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h2>Налаштування гри</h2>

      <label>Рівень складності:</label>
      <Select
        name="difficulty"
        value={formik.values.difficulty}
        onChange={formik.handleChange}
      >
        <option value="easy">Легкий (3x3)</option>
        <option value="normal">Середній (4x4)</option>
        <option value="hard">Складний (5x5)</option>
      </Select>

      <CheckboxLabel>
        <Checkbox
          name="beginnerMode"
          checked={formik.values.beginnerMode}
          onChange={formik.handleChange}
        />
        Увімкнути режим для новачка
      </CheckboxLabel>

      <ButtonGroup>
        <Button type="submit">Зберегти</Button>
        <Button type="button" onClick={() => navigate("/")}>
          Скасувати
        </Button>
      </ButtonGroup>
    </Form>
  );
}
