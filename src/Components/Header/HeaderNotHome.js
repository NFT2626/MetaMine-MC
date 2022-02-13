import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

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
  .connect {
    color: #19f919;
    font-weight: 700;
    font-size: 18px;
  }
  .a {
    text-decoration: none;
  }
`;

const HeaderNotHome = () => {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  return (
    <Wrapper>
    <a href="/">
      <img
        src="../../images/creativerse.png"
        alt="logo"
        className="logo"
      />
      </a>
      <a onClick={scrollToBottom} href="#" className="a"> {// eslint-disable-line
      }
      <p className="m-0 connect">Play Now!</p> 
      </a>
    </Wrapper>
  );
};
export default HeaderNotHome;
