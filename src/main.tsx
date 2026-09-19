import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./styles.css";
import App from "./App.tsx";

console.log("VERSION NUEVA EMOS - HASHROUTER", Date.now());
console.log("URL:", window.location.href);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <div style={{ display: "none" }}>
        HASHROUTER-TEST
      </div>
      <App />
    </HashRouter>
  </StrictMode>,
);