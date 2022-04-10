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
    color: #d5d5d5;
    font-weight: 750;
    font-size: 25px;
    padding-left: 50px;
  }

  .wallet {
    color: #f6ff00;
    font-weight: 600;
    font-size: 18px;
  }

  .a {
    text-decoration: none;
  }

  @media only screen and (max-width: 767px) {
    #walletmobile {
      display: none;
    }

    .connect {
      padding-left: 0px;
      font-weight: 700;
    }
  }
`;

const Header = () => {
  const scrollTotop = () => {
    scroll.scrollToTop();
  };
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  return (
    <Wrapper>
      <img
        src="./images/diamond HDcropped.gif"
        alt="#"
        className="logo"
        onClick={scrollTotop}
      />
      <a onClick={scrollToBottom} href="#" className="a">{// eslint-disable-line
      }
      <p className="m-0 connect">Play Now!</p> 
      </a>
      <div id="walletmobile">
      <a href="/claim" className="a">
      <p className="m-0 wallet"><u>Stake Plots</u></p>
      </a>
      </div>
    </Wrapper>
  );
};
export default Header;
