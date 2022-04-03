import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  position: fixed;
  left: 0;
  width: 100%;
  border-radius: 0px 0px 15px 15px;
  padding: 15px 15px;
  z-index: 1;
  .main-container {
  }
  .logo {
    width: 40px;
    cursor: pointer;
  }
  .a {
    text-decoration: none;
  }

  .wallet {
    color: #f6ff00;
    font-weight: 600;
    font-size: 18px;
  }
`;

const HeaderNotHome = () => {
  return (
    <Wrapper>
    <a href="/">
      <img
        src="../../images/diamond HDcropped.gif"
        alt="logo"
        className="logo"
      />
      </a>
      <div id="walletmobile">
      <a href="/claim" className="a">
      <p className="m-0 wallet"><u>Stake Plots</u></p>
      </a>
      </div>
    </Wrapper>
  );
};
export default HeaderNotHome;
