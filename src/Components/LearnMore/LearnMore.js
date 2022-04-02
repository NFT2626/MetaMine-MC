import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  padding: 0 10px;

  .subtitle {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: #00fcff;
  }
  .name {
    font-size: 24px;
    font-weight: 700;
    color: #f6ff00;
    text-align: center;
    padding: 25px 0;
    padding-bottom: 8px;
  }
  .image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 25px;
  }
  .title {
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    color: #00ff18;
  }
  .slick-arrow {
    top: 60%;
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
  .slick-arrow {
    display: none !important;
  }
  .button {
    border: 0;
    outline: 0;
    border-radius: 16px;
    font-family: Minecraft Ten;
    font-size: 32px;
    font-weight: 500;

    color: #fff;
    background: #009a9a;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 30px;
    padding-top: 4px;
  }

  @media only screen and (max-width: 1600px) {
    .image {
      height: 280px;
    }
  }
  @media only screen and (max-width: 1399px) {
    .image {
      height: 300px;
    }
  }

  @media only screen and (max-width: 520px) {
    .image {
      height: 320px;
    }
    .title {
      font-size: 28px;
    }
    .subtitle {
      font-size: 16px;
    }
    .button {
      font-size: 16px;
    }
  }
`;

const LearnMore = () => {
  const learnMoreArray = [
    { name: "Plot #1624", image: "./images/1.png" },
    { name: "Plot #0", image: "./images/2.png" },
    { name: "Plot #12", image: "./images/3.png" },
    { name: "Plot #11", image: "./images/4.png" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
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
  return (
    <Col className="mx-auto " id="learnmore" lg={11} xl={10} xxl={7}>
      <Wrapper>
        <h1 className="subtitle">
          Every build saved on the blockchain and powered by IPFS. Build with
          freedom, with no fear of censorship or loss of build data
        </h1>
        <Row className="pb-3 d-none d-lg-flex">
          {learnMoreArray.map((el, i) => (
            <Col md={3} key={i}>
              <div className="px-md-2 px-xl-0 ">
                <p className="name m-0">{el.name}</p>
                <img src={el.image} alt="" className="image" />
              </div>
            </Col>
          ))}
        </Row>

        <div className="d-lg-none">
          <Slider {...settings}>
            {learnMoreArray.map((el, i) => (
              <div className="px-4 px-sm-2">
                <p className="name m-0">{el.name}</p>
                <img src={el.image} alt="" className="image" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h2 className="title pt-5">Join The AlternativeSea Today!</h2>
          <Link
            to="howtojoin"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            {" "}
            <button className="button my-2">How To Join</button>
          </Link>
          <Link
            to="howtojoin"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <BsChevronDown color="#fff" style={{ cursor: "pointer" }} />
          </Link>
        </div>
      </Wrapper>
    </Col>
  );
};
export default LearnMore;
