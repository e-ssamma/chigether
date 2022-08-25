import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function SideBar() {
  return (
    <nav className="sidebar">
      <Link to="/Allpage">
	    <button className="sidebar-button">전체글 보기</button>
        <br></br>
      </Link>
	  <Link to="/TopChicken">
	    <button className="sidebar-button">TOP치킨</button>
        <br></br>
      </Link>
	  <Link to="/Bestpage">
	    <button className="sidebar-button">인기게시판</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button className="sidebar-button">인기글</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button className="sidebar-button">치킨홍보</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button className="sidebar-button">치킨Q&A</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button className="sidebar-button">치킨TIP</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button className="sidebar-button">치킨창업</button>
        <br></br>
      </Link>
    </nav>
  );
}

export default SideBar;
