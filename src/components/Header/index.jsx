import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import {purple} from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <Link to="/">
          <img className="logo-image" src="img/logo.png" />
        </Link>
        <div className="search">
          <input className="search-input" type="text" name="search" />
          <SearchIcon sx={{color: purple[900], fontSize: 40}} />
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  width: 98%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
`;
