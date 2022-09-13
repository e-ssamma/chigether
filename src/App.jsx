import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import {
  Home,
  allpage,
  bestpage,
  topchicken
} from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/allpage" element={<allpage />} />
          <Route path="/topchicken" element={<topchicken />} />
          <Route path="/bestpage" element={<bestpage />} />
        </Route>  
      </Routes>
    </Router>
  );
}

export default App;
