import React from "react";
import {Outlet} from "react-router-dom";
import styled from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

function MainLayout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
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
