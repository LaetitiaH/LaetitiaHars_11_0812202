import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/index";
import Rental from "./pages/Rental";
import About from "./pages/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import GlobalStyle from "./utils/styles/GlobalStyle";
import { DeviceProvider } from "./utils/context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <DeviceProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:accommodationId" element={<Rental />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </DeviceProvider>
    </Router>
  </React.StrictMode>
);
