import React, {useState} from "react";
import styled from "styled-components";

function gesipan() {
  const [contents, setContents] = useState({
    title: " ",
    content: " "
  })

  const [viewContents, setViewContents] = useState([]);

  const onChange = (event) => {
    const {title, content} = event.target;

    setContents({
      ...contents,
      [title]: content
    });

    console.log(contents);
  }

  const onClick = (event) => {
    event.preventDefault();
    if ( contents === null ) {
      return;
    }    
    setViewContents(currentArray => [...currentArray, contents]);
    setContents(null);
  }

  return (
    <Container className="container">
      <h1>치킨 게시판</h1>
      <Contents>
        {viewContents.map((element) =>
          <div key={element.toString()}>
            <h2>{element.title}</h2>
            <div>
              {element.content}
            </div>
          </div>    
        )}
        
      </Contents>
      <InputContent>
        <h3>글쓰기</h3>
        <InputTitle type='text' placeholder='제목' onChange={onChange} name="title" />
        <InputText placeholder='내용' onChange={onChange}></InputText>
      </InputContent>
      <ButtonSubmit onClick={onClick}>입력</ButtonSubmit>
    </Container>
  );
}

export default gesipan;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  }
`;

const Contents = styled.div`
  margin: 0 auto;
  width: 80%;
  border: 1px solid #333;
  padding: 10px 0 30px 0;
  border-radius: 5px;
  }
`;

const InputContent = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 1px solid #333;
  }
`;
  
const InputTitle = styled.input`
  width: 80%;
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
  border: none;
  background: orange;
  border-radius: 10px;
  }
`;