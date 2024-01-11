import React from "react";
import "./App.css";
import "./App.less";
import { t } from "i18next";

export default function App() {
  return (
    <main>
      <h1>{t("appName")}</h1>
      <button className='btn'>Hello daisyUI</button>
    </main>
  );
}
