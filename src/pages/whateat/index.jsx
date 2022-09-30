import React from "react";
import styled from "styled-components";

function WhatEat() {
  /*
  const qnaList = [
    {
      q: "1. ?",
      a: [
        {answer: "a. ", type: [1, 2, 4, 9]},
        {answer: "b. ", type: [0, 3, 6, 5, 10, 8]},
        {answer: "c. ", type: [7, 11] },
      ]
    },
  ]
    
  const infoList = [
    {
      name: "name",
      desc: "desciption"
    },
  ]

  const endPoint = 12;
  const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const calResult = () => {
    const result = select.indexOf(Math.max(...select));
    // 전개구문 배열을 펼쳐주는거

    return result;
  }

  const setResult = () => {
    const point = calResult();
    const resultName = document.querySelector(".resultname");

    resultName.innerHTML = infoList[point].name;

    const resultImg = document.createElement("img");
    const imgDiv = document.querySelector("#resultImg");
    const imgURL = "img/kyochon-honey.png";
  
    
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add("img-fluid");
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector(".resultDesc");
    
    resultDesc.innerHTML = infoList[point].desc;
  }

  const goResult = () => {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block";
    }, 450)
    }, 450);

    //디버깅용
    console.log(select);
    setResult();
  }

  const addAnswer = (answerText, qIdx, idx) => {
    const a = document.querySelector(".answerBox");
    //createElement : HTML 요소를 만들어주는 함수
    const answer = document.createElement("button");
    //appendChild : a에 내용에 answer 값을 연결
    answer.classList.add("answerList");
    
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function() {
      const children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
          children[i].disabled = true;
          children[i].style.WebkitAnimation = "fadeOut 0.5s";
          children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
          const target = qnaList[qIdx].a[idx].type;
          for (let i = 0; i < target.length; i++) {
          select[target[i]] += 1;
         }
 
          for (let i = 0; i < children.length; i++) {
          children[i].style.display = 'none';
          }
          goNext(++qIdx);
      }, 450)
    }, false);
  }

  const goNext = (qIdx) => {
    if (qIdx === endPoint) {
    goResult();
    return;
    }
    const q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    const status = document.querySelector(".statusBar");
    status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
  }
  
  const begin = () => {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block";
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
    }, 450);
  }
  */
  return (
    <Container className="container">
      <section id="main">
        <h1>치킨 먹고 싶은데 뭐 시켜 먹을까?</h1>
        <div>
          <h3>이미지가 필요합니다</h3>
        </div>
          선택지를 고르면 오늘 먹을 치킨을 추천해줍니다.
          아래 시작버튼을 눌러주세요.
        <button type="button">시작하기</button>
      </section>

      <section id="qna">
        <div>
          <div className="statusBar">

          </div>
        </div>
        <div>

        </div>
        <div className="answerBox">

        </div>
      </section>

      <section id="result">
        <h1>당신의 결과는?!</h1>
        <div className="resultname">

        </div>
        <div id="resultImg">

        </div>
        <div className="resultDesc">

        </div>

        <button type="button">공유하기</button>
      </section>
    </Container>
  );  
}

export default WhatEat;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

