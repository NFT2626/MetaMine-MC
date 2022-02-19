import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsChevronUp } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";
const Wrapper = styled.div`
  padding: 5px 10px;
  position: fixed;
  bottom:0;
  .icon {
    font-size: 36px;
    color: #fff;
    cursor: pointer;
  }
  .arrow {
    position: fixed;
    top: 97%;
    left: 50%;
    

    transform: translate(-50%, -50%);
    color: #fff;
    cursor: pointer;
    font-weight: 700;
  }
  @media only screen and (max-width: 967px) {
    .icon {
      font-size: 28px;
      color: #fff;
      cursor: pointer;
    }
  }
`;

const Footer = () => {
  const scrollTotop = () => {
    scroll.scrollToTop();
  };
  return (
    <Wrapper>
      <Col className="mx-auto">
        <a href="https://twitter.com/larvachads" target="_blank" rel="noreferrer">
          {" "}
          <BsTwitter className="icon " />
        </a>
        <a href="https://discord.gg/XEpzU6jygY" target="_blank" rel="noreferrer">
          <FaDiscord className="icon mx-2" />
        </a>
        <BsChevronUp className="arrow" onClick={scrollTotop} />
      </Col>
    </Wrapper>
  );
};
export default Footer;
