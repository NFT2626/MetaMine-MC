import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom"
import Web3 from "web3";
import copy from "copy-to-clipboard";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 10px;
  padding-top: 110px;
  
  .username {
    font-size: 100px;
    color: #19f919;
    font-weight: bold;
  }
  
  .info {
    font-size: 25px;
    color: #f6ff00;
  }
  
  .signed, .signedPrefix {
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
  
  .signedButton {
    display: none;
    border: 0;
    outline: 0;
    border-radius: 16px;
    font-family: Minecraft Ten;
    font-size: 20px;
    font-weight: 500;

    color: #fff;
    background: #00800c;
    justify-content: center;
    align-items: center;
    padding: 14px 30px;
    padding-top: 12px;
  }`;

const LinkComponent = () => {
    const { uuid } = useParams();

    const [copyText, setCopyText] = useState('');

    const handleCopyText = (e) => {
      setCopyText(e.textContent);
    }

    const copyToClipboard = () => {
      copy(copyText);
      alert("Command copied! Paste into Minecraft to link your account.");
    }

    async function run(uuid) {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
            
            if (!(uuid == null)) {
              web3.eth.personal.sign("I agree that the account signing this message will be linked to the Minecraft Java account with the UUID of " + uuid, accounts[0], "").then(
                  (msg) => {
                      var element = document.getElementsByClassName("signedPrefix")[0];
                      element.innerHTML =  "Paste this command into Minecraft:"
                      element = document.getElementsByClassName("signed")[0];
                      element.innerHTML = "<b>/link " + msg + "</b>";
                      handleCopyText(element);
                      element = document.getElementsByClassName("signedButton")[0];
                      element.style.display = "flex";
                      
                  }
              );
                
            }
        }
    }

    useEffect(() => {
        run(uuid);
    }, []); // eslint-disable-line

    return (
        <Wrapper>
            <p className="username">Link Your MC Account</p>
            <p className="info">Please sign the message in the Metamask popup.</p>
            
            <br />
            <br />
            <br />

            <p className="signedPrefix"> </p>
            <p className="signed" id="signed">This does not cost gas.</p>
            <button className="signedButton" onClick={copyToClipboard}>Copy to Clipboard</button>
        </Wrapper>
    );
};
export default LinkComponent;
