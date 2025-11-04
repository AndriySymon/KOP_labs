import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSettings } from "../context/SettingsContext";
import Button from "../components/Button";

export default function SettingsPage({ onBack }) {
  const { settings, setSettings } = useSettings();

  const formik = useFormik({
    initialValues: settings,
    validationSchema: Yup.object({
      difficulty: Yup.string().required("Оберіть рівень складності"),
      beginnerMode: Yup.boolean(),
    }),
    onSubmit: (values) => {
      setSettings(values);
      onBack();
    },
  });

  return (
    <form className="settings-form" onSubmit={formik.handleSubmit}>
      <h2>Налаштування гри</h2>

      <label>Рівень складності:</label>
      <select name="difficulty" value={formik.values.difficulty} onChange={formik.handleChange} className="form-input">
        <option value="easy">Легкий (3x3)</option>
        <option value="normal">Середній (4x4)</option>
        <option value="hard">Складний (5x5)</option>
      </select>

      <label className="checkbox-label">
        <input type="checkbox" name="beginnerMode" checked={formik.values.beginnerMode} onChange={formik.handleChange} className="checkbox-input" />
        Увімкнути режим для новачка
      </label>

      <div className="form-buttons">
        <Button type="submit">Зберегти</Button>
        <Button type="button" onClick={onBack}>Скасувати</Button>
      </div>
    </form>
  );
}
