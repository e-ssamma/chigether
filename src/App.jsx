import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import {
  Home,
  Allpage,
  Bestpage,
  Topchicken
} from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/allpage" element={<Allpage />} />
          <Route path="/topchicken" element={<Topchicken />} />
          <Route path="/bestpage" element={<Bestpage />} />
        </Route>  
      </Routes>
    </Router>
  );
}

export default App;
