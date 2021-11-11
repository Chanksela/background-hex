import React, { useState } from "react";
import "../components/ChangeHex.css";
const ChangeHex = () => {
  const [hex, setHex] = useState("#ffffff");
  const changeHexHandler = () => {
    const randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomHex);
  };
  return (
    <div
      className="Container"
      style={{
        background: hex,
      }}
    >
      <h1 className="App-Text">{hex}</h1>
      <div className="Panel">
        <button onClick={changeHexHandler}>Random Hex</button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(hex);
          }}
        >
          Copy Hex
        </button>
      </div>
    </div>
  );
};

export default ChangeHex;
