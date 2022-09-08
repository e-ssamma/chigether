import React from "react";
import styled from "styled-components";

function TopMenu() {
  return (
    <MenuGrid>
      <div>메뉴</div>
      <div>광고물</div>
      <div>개인정보</div>
    </MenuGrid>
  );
}

export default TopMenu;

const MenuGrid = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 5px solid #ffa500;
`;
