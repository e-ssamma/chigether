import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import Pages from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/allpage" element={<Pages.Allpage />} />
          <Route path="/topchicken" element={<Pages.Topchicken />} />
          <Route path="/bestpage" element={<Pages.Bestpage />} />
          <Route path="/bestpost" element={<Pages.Bestpost />} />
          <Route path="/worldcup" element={<Pages.Worldcup />} />
          <Route path="/whateat" element={<Pages.Whateat />} />
          <Route path="/ad" element={<Pages.AD />} />
          <Route path="/tip" element={<Pages.Tip />} />
          <Route path="/qna" element={<Pages.QNA />} />
          <Route path="/business" element={<Pages.Business />} />
          <Route path="/gesipan" element={<Pages.Gesipan />} />
        </Route>  
      </Routes>
    </Router>
  );
}

export default App;

