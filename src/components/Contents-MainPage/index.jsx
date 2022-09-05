import React from "react";

function MainPage() {
  return (
    <div className="mainTable">
      <table border={1} width="1000px" height="2000px">
	    <tbody>
          <tr>
            <td width="500px" height="500px" align="center">
              <h1>이 달의 치킨</h1>
			  <img className="chicken-image" src="img/kyochon-honey.png" />
			  <h3>교촌 허니콤보</h3>
            </td>
            <td align="center">
			  <h1>인기 게시판</h1>
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
            </td>      
          </tr>
		  <tr>
		    <td width="500px" height="500px" align="center"><h1>인기 게시글</h1></td>
            <td align="center"><h1>치킨 신제품</h1></td>
          </tr>
          <tr>
		    <td width="500px" height="500px" align="center"><h1>치킨 TIP</h1></td>
            <td align="center"><h1>치킨 Q&A</h1></td>
          </tr>
		  <tr>
		    <td width="500px" height="500px" align="center"><h1>치킨 홍보</h1></td>
            <td align="center"><h1>창업 문의</h1></td>
          </tr>
        </tbody>
        
      </table>
    </div>
  );
}

export default MainPage;
