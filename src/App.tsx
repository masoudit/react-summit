import React, { useEffect } from "react";
import "./App.css";
import "./App.less";
import { t } from "i18next";
import { useAuthStore } from "./app/local/authStore";
import { useBearStore } from "./app/local/sampleStore";

export default function App() {
  const login = useAuthStore((state) => state.login);
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);

  const onSubmit = async () => {
    // const response = await fetch("/api/login");
    login("test", "test1");
  };

  return (
    <main>
      <h1>{t("appName")}</h1>
      <button className='btn' onClick={onSubmit}>
        Hello daisyUI {bears}
      </button>
    </main>
  );
}
