import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../Components/HeroSection/HeroSection";
import LearnMore from "../Components/LearnMore/LearnMore";
import HowtoJoin from "../Components/HowToJoin/HowToJoin";
import Header from "../Components/Header/Header";

function Home() {
    return (
        <>
        <Header />
        <HeroSection />
        <LearnMore />
        <HowtoJoin />
        </>
      );
}

export default Home;