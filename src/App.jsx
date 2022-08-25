import React from "react";
import {Home} from "pages";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AllPage from "pages/AllPage";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllPage" element={<AllPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
