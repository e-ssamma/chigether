import React from "react";
import styled from "styled-components";

function MainLayout() {
  return (
    <Containter>
      <main>
      </main>
    </Containter>
  );
}

export default MainLayout;

const Containter = styled.div`
  grid-template-areas:
		"header header header"
		"   a    main    b   "
		"   .     .      .   "
		"footer footer footer";
`;
