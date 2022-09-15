import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

function allpage() {
  return (
    <Container className="container">
      <div className="brand--box">		
        <h3 className="brand--title">교촌치킨</h3>
        <ul className="brand--menu">
          <li>
            <PageLink to="/">
	          교촌 오리지날
            </PageLink>
          </li>
          <li>교촌 허니콤보</li>
          <li>교촌 레드콤보</li>
          <li>교촌 블랙시크릿</li>
          <li>교촌 리얼후라이드</li>
          <li>교촌 치즈트러플</li>
        </ul>
      </div>
	  <div className="brand--box">		
        <h3 className="brand--title">굽네치킨</h3>
      </div>
	  <div className="brand--box">		
        <h3 className="brand--title">BBQ치킨</h3>
      </div>
      <div className="brand--box">		
        <h3 className="brand--title">맘스터치</h3>
      </div>
      <div className="brand--box">		
        <h3 className="brand--title">노랑통닭</h3>
      </div>
      <div className="brand--box">		
        <h3 className="brand--title">60계치킨</h3>
      </div>
      <div className="brand--box">		
        <h3 className="brand--title">네네치킨</h3>
      </div>
      <div className="brand--box">		
        <h3 className="brand--title">BHC치킨</h3>
      </div>
      <div className="brand--box">		
        <h3 className="brand--title">빈칸</h3>
      </div>
	    
    </Container>
  );
}

export default allpage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .brand--box {
    flex: 1 1 30%;
    border: 1px solid #333;
  }
`;

const PageLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
`;
