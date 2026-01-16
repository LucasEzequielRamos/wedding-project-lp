import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router";
import Gifts from "./pages/gifts";
// import Layout from "./components/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gifts" element={<Gifts />} />
        {/* <Route element={<Layout />}> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
