import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "pages";
import AllPage from "pages/AllPage";
import BestPage from "pages/BestPage";
import TopChicken from "pages/TopChicken";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllPage" element={<AllPage />} />
        <Route path="/TopChicken" element={<TopChicken />} />
        <Route path="/BestPage" element={<BestPage />} />
		
      </Routes>
    </Router>
    
  );
}

export default App;
