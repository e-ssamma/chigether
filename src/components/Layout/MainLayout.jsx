import React from "react";
import {Outlet} from "react-router-dom";
import styled from "styled-components";

import Header from "../Header";
import Footer from "../Footer";
import SideBar from "../SideBar";

function MainLayout() {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <div className="container">
          <SideBar/>
          <Outlet />
        </div>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}

export default MainLayout;

const Wrapper = styled.div`
  grid-template-areas:
		"header header header"
		"   a    main   main "
		"   .     .      .   "
		"footer footer footer";
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    justify-content: space-between;
    gap: 1em;
  }
`;
