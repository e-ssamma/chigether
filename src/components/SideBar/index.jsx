import React from "react";
import {Link} from "react-router-dom";

function SideBar() {
  return (
    <>
      <Link to="/Allpage">
	    <button>전체글 보기</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button>TOP치킨</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button>인기게시판</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button>인기글</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button>치킨홍보</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button>치킨Q&A</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button>치킨TIP</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button>치킨창업</button>
        <br></br>
      </Link>
    </>
  );
}

export default SideBar;
