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
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: #bfbfbf;
  }
  .name {
    font-size: 15px;
    font-weight: 700;
    color: #0fcff0;
    text-align: center;
    padding: 25px 0;
    padding-bottom: 8px;
  }
  .image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 0px;
  }
  .title {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    color: #00fcff;
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
    { name: "Plot", image: "./images/plot3.gif" },
    { name: "Plot", image: "./images/plot3.gif" },
    { name: "Plot", image: "./images/plot3.gif" },
    { name: "Plot", image: "./images/plot3.gif" },
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
        <iframe width="100%" height="300" overflow="hidden" src="https://nft2626.github.io/slidshowplots/" title="Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1 className="title">Web3 Culture</h1>
        <h1 className="subtitle">
        <h1 className="subtitle"> </h1>
        AlternativeSea are generative Plots with schematic, resource & feature data stored on chain and ipfs.
        AlternativeSea can be played, explored and built in. You can save changes you make to your world so they reflect on your NFT in 3D!. Build with
        freedom, with no fear of censorship or loss of build data. Own a plot now build a Metaverse a community 
        around it and make it unique ! many more games and features are already installed like In-game economy,
        OneBlock,SkyWars,guns accessible to Plots owners etc...and there is much more to come.
        </h1>
        <h1 className="subtitle">    </h1>
        <h1 className="subtitle">    </h1>
        <h1 className="subtitle">    </h1>
        <iframe width="100%" height="300" overflow="hidden" src="https://nft2626.github.io/slidshowsworldmain/" title="Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1 className="title">Hold A Plot get a World </h1>
        <h1 className="subtitle">
        <h1 className="subtitle"> </h1>
        Every AlternativeSea Plot holder own a unique set of randomly generated terrain and rare features. 
        Each world is 16,000,000 x 16,000,000 blocks in size and accessible from your Plot via a "Portal" where you fully control the access. 
        Giving you nearly infinite space to start building your community and develop your Metaverse where your Plot act has a Lobby for your World.
        </h1>
        <h1 className="subtitle">    </h1>
        <h1 className="subtitle">    </h1>
        <h1 className="subtitle">    </h1>
        <iframe width="100%" height="300" overflow="hidden" src="https://nft2626.github.io/slideshow/" title="Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1 className="title">Don’t feel like building a whole Metaverse ? Play !</h1>
        <h1 className="subtitle">
        <h1 className="subtitle"> </h1>
        Just enjoy your plot explore invite friends to survive and build in your plots featuring caves, secret rooms, nether and ender world and other surprises or 
        Be prepared for the survival Adventure of your life in our custom Maps made By the Legendary Minecraft Builder "McMeddon"
        all in Multiplayer accessible to everyone off course plots owner will have non negligible advantages over the simple visitors, join the server
        by following the instructions below to start now !
        <h1 className="subtitle">    </h1>
        <h1 className="subtitle">    </h1>
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
          <h2 className="title pt-5">Join AlternativeSea Today!</h2>
          <img src="./images/9.png" alt="" className="image" />
          <h2 className="title pt-5"> </h2>
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
