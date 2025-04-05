import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ParticlesComponent from "./assets/components/Particles";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ParticlesComponent id="particles" />
  </StrictMode>
);
