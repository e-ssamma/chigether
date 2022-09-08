import React from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

function SideBar() {
  return (
    <Sidebar>
      <div className="menu--description">
        치게더 전체 메뉴
      </div>
      <Link to="/Allpage">
	      <button className="btn-orange">전체글 보기</button>
        <br />
      </Link>
	    <Link to="/TopChicken">
	      <button className="btn-orange">TOP치킨</button>
        <br />
      </Link>
      <Link to="/Bestpage">
        <button className="btn-orange">인기게시판</button>
        <br />
      </Link>
      <Link to="/Allpage">
        <button className="btn-orange">인기글</button>
        <br />
      </Link>
      <Link to="/Allpage">
        <button className="btn-orange">치킨홍보</button>
        <br />
      </Link>
	    <Link to="/Allpage">
	      <button className="btn-orange">치킨Q&A</button>
        <br />
      </Link>
	    <Link to="/Allpage">
	      <button className="btn-orange">치킨TIP</button>
        <br />
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
  button {
    height: 30px;
    width: 160px;
    border: 1px solid #eee;
  }

  .menu--description {
    height: 30px;
    width: 160px;
    background-color: orange;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-orange {
    background-color: #fff;
    color: #000;
  }
`;
