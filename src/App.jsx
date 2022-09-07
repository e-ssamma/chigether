import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import {
  Home,
  AllPage,
  BestPage,
  TopChicken
} from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/AllPage" element={<AllPage />} />
          <Route path="/TopChicken" element={<TopChicken />} />
          <Route path="/BestPage" element={<BestPage />} />
        </Route>  
      </Routes>
    </Router>
  );
}

export default App;
