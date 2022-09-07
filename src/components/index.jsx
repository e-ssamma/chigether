import React from "react";

import SideBar from "./SideBar";
import Contents from "./Contents-MainPage";
import "./style.css"

const Content = () => (
  <div className="contents">
    <SideBar />
    <Contents />
  </div>
);

export default Content;

