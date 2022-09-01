import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Contents from "./Contents-MainPage";
import "./style.css"

const Content = () => (
  <div>
    <Header />
    <div className="contents">
      <SideBar />
      <Contents />
    </div>
    
    <Footer />
  </div>
);

export default Content;

