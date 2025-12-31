import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
// import Layout from "./components/layout.tsx";
// import Gifts from "./pages/gifts.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/gifts" element={<Gifts />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
