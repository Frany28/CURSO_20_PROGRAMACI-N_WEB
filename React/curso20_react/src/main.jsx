import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from "./components/general/Button";
import "./Resources/css/output.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Hola Mundo</h1>
    <Button texto="Click me" estilos="text-white bg-red-600 rounded-md p-2" />
    <Button estilos="text-white bg-blue-600 rounde-md p-2"></Button>
  </StrictMode>
);
