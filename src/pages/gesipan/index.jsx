import React, {useState} from "react";
import styled from "styled-components";

function gesipan() {
  const [contents, useContents] = useState({
    title: " ",
    content: " "
  })
  return (
    <Container className="container">
      <h1>게시판</h1>
      <Contents>
        <h2>제목</h2>
        <div>
          내용
        </div>
      </Contents>
      <InputContent>
        <InputTitle type='text' placeholder='제목' />
        <InputText placeholder='내용'></InputText>
      </InputContent>
      <ButtonSubmit>입력</ButtonSubmit>
    </Container>
  );
}

export default gesipan;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  }
`;

const Contents = styled.div`
  margin: 0 auto;
  width: 80%;
  border: 1px solid #333;
  padding: 10px 0 30px 0;
  border-radius: 5px;
  margin-bottom : 50px;
  }
`;

const InputContent = styled.div`
  width: 80%;
  margin: 0 auto;
  }
`;
  
const InputTitle = styled.input`
  width: 500px;
  height: 40px;
  margin: 10px;
  }
`;

const InputText = styled.textarea`
  width: 80%;
  min-height: 500px;
  }
`;

const ButtonSubmit = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  padding: 20px;
  border: none;
  background: indianred;
  border-radius: 5px;
  }
`;