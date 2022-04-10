import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
const Wrapper = styled.div`
  padding: 50px 10px;
  .my-card {
    border-radius: 18px;
    height: 100%;
    padding: 15px;
    border: 5px solid #00fcff;
  }
  .title {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: #fff;
  }
  .text {
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
  .button {
    border: 0;
    outline: 0;
    border-radius: 16px;
    font-family: Minecraft Ten;
    font-size: 20px;
    font-weight: 500;

    color: #fff;
    background: #00800c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 30px;
    padding-top: 12px;
  }

  .a {
    text-decoration: none;
  }

  .my-slider {
    border: 5px solid #00fcff;
    border-radius: 15px;
    height: 266px;
  }
  .slick-arrow {
    display: none !important;
  }

  .slick-dots {
    bottom: -40px;
  }
  .slick-dots li button ::before {
    color: #fff;
    padding-top: 50px;
  }
  .slick-dots li.slick-active button::before {
    color: #fff;
  }
  #legal {
    color: #fff;
    text-align: center;
    padding-top: 30px;
  }

  @media only screen and (max-width: 767px) {
    .my-card {
      border: none;
    }
    .my-slider {
      height: 315px;
    }
    .title {
      font-size: 24px;
    }
    .text {
      text-align: center;
      color: #fff;
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 675px) {
    #legal {
      padding-top: 50px;
    }
  }
  @media only screen and (max-width: 520px) {
    .my-slider {
      height: 330px;
    }
    #legal {
      padding-top: 50px;
    }
  }
  @media only screen and (max-width: 480px) {
    .my-slider {
      height: 300px;
    }
    #legal {
      padding-top: 50px;
    }
  }
`;

const HowtoJoin = () => {
  const howToJoinArray = [
    {
      title: "Mint",
      details:
        "Mint a plot to start Building your Metaverse.",

      buttonText: "Mint",
      buttonLink: "https://www.alternativesea.com",
      copyLink: ""
    }
    {
      title: "Minecraft",
      details:
        "AlternativeSea server for Minecraft Launchers.",

      soft: "Minecraft 1.18.2+",
      serverIp: "alternativesea.apexmc.co",
      buttonText: "copy ip",
      copyLink: "alternativesea.apexmc.co",
    },
    {
      title: "DynMap",
      details:
        "Don’t have Minecraft? You can still explore the builds with the online web map of the world.",
      buttonText: "view map",
      buttonLink: "http://103.195.103.177:8123/",
      copyLink: ""
    },
    {
      title: "Opensea",
      details:
        "View and trade your plot(s) after minting or /save",
      buttonText: "Opensea",
      buttonLink: "https://opensea.io/collection/alternativesea-plots",
      copyLink: ""
    }
  ];
  const settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 767,

        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const onCopyText = (el) => {
    if (el !== "") {
      console.log(el);
      alert("IP Copied! Go to Multiplayer, click Add Server, and paste into the Server IP");
    }
    
  }

  return (
    <Col className="mx-auto" lg={11} xl={10} xxl={7} id="howtojoin">
      <Wrapper>
        <Row className="d-none d-md-flex">
          {" "}
          {howToJoinArray.map((el, i) => (
            <Col md={3} className="px-xl-4 px-xxl-2" key={i}>
              <div className="my-card d-flex justify-content-between align-items-center flex-column ">
                <div>
                  <h3 className="title">{el.title}</h3>
                  <p className="m-0 text pt-4">{el.details}</p>
                  {el.soft && <p className="m-0 text py-4">{el.soft}</p>}
                  {el.serverIp && <p className="m-0 text">{el.serverIp}</p>}
                </div>
                <CopyToClipboard text={el.copyLink} onCopy={onCopyText}>
                <a href={el.buttonLink} target="_blank" rel="noopener noreferrer" className="a">
                <button className="button mt-3">{el.buttonText}</button>
                </a>
                </CopyToClipboard>
              </div>
            </Col>
          ))}
        </Row>
        <div className="d-md-none">
          <Slider {...settingss}>
            {howToJoinArray.map((el, i) => (
              <div className="px-2">
                <div className="px-xl-4 my-slider" key={i}>
                  <div className="my-card d-flex justify-content-between align-items-center flex-column ">
                    <div>
                      <h3 className="title">{el.title}</h3>
                      <p className="m-0 text pt-4">{el.details}</p>
                      {el.soft && <p className="m-0 text py-3">{el.soft}</p>}
                      {el.serverIp && <p className="m-0 text">{el.serverIp}</p>}
                    </div>
                    <CopyToClipboard text={el.copyLink} onCopy={onCopyText}>
                    <a href={el.buttonLink} target="_blank" rel="noopener noreferrer" className="a">
                    <button className="button mt-3">{el.buttonText}</button>
                    </a>
                  </CopyToClipboard>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <p id="legal">AlternativeSea is not affiliated with Mojang or Microsoft.</p>
      </Wrapper>
    </Col>
  );
};
export default HowtoJoin;
