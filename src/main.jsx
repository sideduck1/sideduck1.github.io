import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./context/LanguageContext";

import "./index.css";
import ProjectPage from "./pages/ProjectPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="over-mij" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects/:projectId" element={<ProjectPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  </React.StrictMode>
);