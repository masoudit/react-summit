import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./app/i18n/i18n";
import { worker } from "./mocks/browser";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

if (process.env.NODE_ENV === "development") {
  worker.start();
}
