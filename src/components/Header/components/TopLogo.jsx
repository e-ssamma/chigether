import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import {purple} from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

function TopLogo() {
  return (
    <Container>
      <Link to="/">
        <LogoImage className="logo-image" />
      </Link>
      <SearchBox className="search">
        <input className="search-input" type="text" name="search" />
        <SearchIcon sx={{color: purple[900], fontSize: 28}} />
      </SearchBox>
    </Container>
  );
}

export default TopLogo;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;  
`;

const LogoImage = styled.div`
  height: 50px;
  width: 139px;
  background-image: url("img/logo.png");
  background-size: cover;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;

  .search-input {
    width: 180px;
    height: 28px;
    border: 3px solid #6441a5;
    background: #fff;
  }
`;
