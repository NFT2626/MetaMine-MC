import React from "react";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Index";
import Footer from "./Components/Footer/Footer";
import Save from "./pages/Save";
import Link from "./pages/Link";
import Claim from "./pages/Claim";
import Stake from "./pages/Stake";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" exact element={<Home />}></Route> {// eslint-disable-line
}
          <Route path='/save/:tokenId/:cid' element={<Save />}></Route>
          <Route path='/link/:uuid' element={<Link />}></Route>
          <Route path='/claim' element={<Claim />}></Route>
          <Route path='/stake/:tokenId' element={<Stake />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
