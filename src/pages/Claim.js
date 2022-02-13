import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNotHome from "../Components/Header/HeaderNotHome";
import ClaimComponent from "../Components/Claim/Claim";

function Claim() {
    return (
        <>
        <HeaderNotHome />
        <ClaimComponent />
        </>
      );
}

export default Claim;