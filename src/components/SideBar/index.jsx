import React from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

function SideBar() {
  return (
    <Sidebar>
      <div className="menu--description">
        치게더 전체 메뉴
      </div>
      <MenuLink to="/allpage">
	      전체글 보기
      </MenuLink>
	    <MenuLink to="/topchicken">
	      TOP치킨
      </MenuLink>
      <MenuLink to="/bestpage">
        인기게시판
      </MenuLink>
      <MenuLink to="/allpage">
        인기글
      </MenuLink>
      <MenuLink to="/allpage">
        치킨홍보
      </MenuLink>
	    <MenuLink to="/allpage">
	      치킨Q&A
      </MenuLink>
	    <MenuLink to="/allpage">
	      치킨TIP
      </MenuLink>
	    <MenuLink to="/allpage">
	      치킨창업
      </MenuLink>
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
    padding: 0 0 0 1em;
    width: calc(160px - 1em);
    height: 30px;
    background-color: orange;
    font-weight: 600;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const MenuLink = styled(Link)`
  margin-bottom: -1px;
  padding: .2em 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-collapse: collapse;
  text-decoration: none;
  color: #000;
`;
