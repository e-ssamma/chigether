import React from "react";
import styled from "styled-components";

function allpage() {
  return (
    <Container className="container">
      <div>
        <h1>안녕? 난 전체 페이지야</h1>
      </div>
	    
    </Container>
  );
}

export default allpage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .content--box {
    flex: 1 1 48%;
    border: 1px solid #333;
  }

  .content--box:nth-child(5),
  .content--box:nth-child(8) {
    flex: 1 1 100%;
  }
`;