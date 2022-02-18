import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNotHome from "../Components/Header/HeaderNotHome";
import WalletComponent from "../Components/Wallet/Wallet";
import ClaimComponent from "../Components/Claim/Claim";

function Claim() {
    return (
        <>
        <HeaderNotHome />
        <ClaimComponent />
        <WalletComponent />
        </>
      );
}

export default Claim;