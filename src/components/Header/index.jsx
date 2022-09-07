import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import {purple} from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <Wrapper>
      <Container className="container">
        <Link to="/">
          <img className="logo-image" src="img/logo.png" />
        </Link>
        <div className="search">
          <input className="search-input" type="text" name="search" />
          <SearchIcon sx={{color: purple[900], fontSize: 40}} />
        </div>
      </Container>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-image {
    height: 50px;
    width: 139px;
  }

  .search {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 50px;
    padding: 0.3em 0.5em;
  }

  .search-input {
    border: 3px solid #6441a5;
    background: #fff;
    font-size: 1.1em;
    padding: 0.3em 0.5em;
  }
`
