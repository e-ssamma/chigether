import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import {
  Home,
  Allpage,
  Bestpage,
  Bestpost,
  Topchicken,
  Worldcup,
  Whateat,
  AD,
  Tip,
  QNA,
  Business,
  Gesipan
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
          <Route path="/bestpost" element={<Bestpost />} />
          <Route path="/worldcup" element={<Worldcup />} />
          <Route path="/whateat" element={<Whateat />} />
          <Route path="/ad" element={<AD />} />
          <Route path="/tip" element={<Tip />} />
          <Route path="/qna" element={<QNA />} />
          <Route path="/business" element={<Business />} />
          <Route path="/gesipan" element={<Gesipan />} />
        </Route>  
      </Routes>
    </Router>
  );
}

export default App;

