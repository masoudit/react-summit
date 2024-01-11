import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./app/i18n/i18n";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
