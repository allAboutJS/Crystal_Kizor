import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/** Mounts the React application to the root DOM element. */
const mountApp = () => {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    return;
  }

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

mountApp();
