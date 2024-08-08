import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        hello_world: "Привет мир",
      },
    },
    uz: {
      translation: {
        hello_world: "Salom dunyo",
      },
    },
  },
  lng: "uz",
  fallbackLng: "uz",

  interpolation: {
    escapeValue: false,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
