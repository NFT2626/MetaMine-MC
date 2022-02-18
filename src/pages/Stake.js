import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNotHome from "../Components/Header/HeaderNotHome";
import StakeComponent from "../Components/Stake/Stake";
import ClaimOneComponent from "../Components/Claim/ClaimOne";

function Stake() {
    return (
        <>
        <HeaderNotHome />
        <StakeComponent />
        <hr></hr>
        <ClaimOneComponent />
        </>
      );
}

export default Stake;