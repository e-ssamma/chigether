import React from "react";

function MainPage() {
  return (
    <div>
      <table border={1} width="1000px" height="1000px">
        <thead>
          <tr>
            <th>참치</th>
            <th>고래</th>      
          </tr>
        </thead>
        <tbody>
		  <tr>
		    <td>상어</td>
            <td>문어</td>
          </tr>
          <tr>
		    <td>오징어</td>
            <td>고등어</td>
          </tr>
        </tbody>
        
      </table>
    </div>
  );
}

export default MainPage;
