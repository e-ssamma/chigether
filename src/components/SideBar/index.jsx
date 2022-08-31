import React from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

function SideBar() {
  return (
    <Sidebar>
      <Link to="/Allpage">
	    <button className="btn-orange">전체글 보기</button>
        <br></br>
      </Link>
	  <Link to="/TopChicken">
	    <button className="btn-orange">TOP치킨</button>
        <br></br>
      </Link>
	  <Link to="/Bestpage">
	    <button className="btn-orange">인기게시판</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button className="btn-orange">인기글</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button className="btn-orange">치킨홍보</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button className="btn-orange">치킨Q&A</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button className="btn-orange">치킨TIP</button>
        <br></br>
      </Link>
	  <Link to="/Allpage">
	    <button className="btn-orange">치킨창업</button>
        <br />
      </Link>
    </Sidebar>
  );
}

export default SideBar;

const Sidebar = styled.nav`
  margin-top: 20px;

  button {
    height: 30px;
    width: 120px;
    padding: 0.3em 1.4em 0.3em 0.7em;
  }

  .btn-orange {
    background-color: tomato;
  }
`;
