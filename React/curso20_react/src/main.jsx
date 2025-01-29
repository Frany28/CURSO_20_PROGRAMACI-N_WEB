import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Test, Hooks, Movies } from "./pages/pages";
import "./Resources/css/output.css";
import { ThemeProvider } from "./context/themeContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
