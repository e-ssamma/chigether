import React from "react";
import styled from "styled-components";

import "./style.css"

function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <span>© 2022-2022 치게더</span>
      </div>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;

 .container {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    height: 10%;
    text-align: center;
    position: absolute;
    background-color: #6441a5;
    color: white;
  }

  .footerItem {
    margin-top: auto;
  }
`;

