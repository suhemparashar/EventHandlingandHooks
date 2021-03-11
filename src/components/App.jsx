import React, { useState } from "react";

function App() {
  const [customStyle, setcustomStyle] = useState({
    backgroundColor: "white",
    color: "#50a3a2"
  });

  function setColor() {
    setcustomStyle({ backgroundColor: "#50a3a2", color: "white" });
  }
  function setColorDefault() {
    setcustomStyle({ backgroundColor: "white", color: "#50a3a2" });
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={customStyle}
        onMouseOver={setColor}
        onMouseOut={setColorDefault}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
