import React from "react";
import styled from "styled-components";

import {TopLogo, TopMenu} from "./components";

function Header() {
  return (
    <Wrapper>
      <Containers className="container">
        <TopLogo />
        <TopMenu />
      </Containers>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
`;

const Containers = styled.div`
  padding: .4em 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
`
