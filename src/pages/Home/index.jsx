import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container className="container">
      <div className="content--box">
        <h3 className="content--title">
          이 달의 치킨
        </h3>
        <div className="content--body">
          <img src="img/kyochon-honey.png" />
			  <h3>교촌 허니콤보</h3>
        </div>
      </div>

      <div className="content--box">
        <h3 className="content--title">
          인기
          {" "}
          게시판
        </h3>
        <div className="content--body">
          <ul align="left">
            <li>교촌치킨</li>
            <li>굽네치킨</li>
            <li>BBQ</li>
            <li>맘스터치</li>
            <li>노랑통닭</li>
            <li>60계치킨</li>
            <li>네네치킨</li>
            <li>BHC치킨</li>
          </ul>
        </div>
      </div>

      <div className="content--box">
        <h3 className="content--title">
        인기 게시글
        </h3>
        <div className="content--body">
        </div>
      </div>

      <div className="content--box">
        <h3 className="content--title">
        치킨 TIP
        </h3>
        <div className="content--body">
        </div>
      </div>

      <div className="content--box">
        <h3 className="content--title">
          치킨 신제품
        </h3>
        <div className="content--body">
        </div>
      </div>

      <div className="content--box">
        <h3 className="content--title">
        치킨 Q&A
        </h3>
        <div className="content--body">
        </div>
      </div>

      <div className="content--box">
        <h3 className="content--title">
          창업 문의
        </h3>
        <div className="content--body">
        </div>
      </div>

      <div className="content--box">
        <h3 className="content--title">
        치킨 홍보
        </h3>
        <div className="content--body">
        </div>
      </div>
    </Container>
  );
}

export default Home;

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
