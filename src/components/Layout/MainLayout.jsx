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
        <SideBar/>
        <Outlet />
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
`;
