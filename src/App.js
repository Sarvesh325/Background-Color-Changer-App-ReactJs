import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const handleClick = (event) => {
    const colorName = event.target.name;
    // if (colorName === "blue") {
    //   setColor("#0D6CFA");
    // } else if (colorName === "red") {
    //   setColor("#DA3544");
    // } else if (colorName === "orange") {
    //   setColor("#FDC007");
    // } else if (colorName === "green") {
    //   setColor("#198754");
    // } else if (colorName === "grey") {
    //   setColor("#6C747C");
    // } else if (colorName === "dark") {
    //   setColor("#202528");
    // } else if (colorName === "white") {
    //   setColor("#F9F8FA");
    // }

    switch (colorName) {
      case "blue":
        setColor("#0D6CFA");
        break;

      case "red":
        setColor("#DA3544");
        break;

      case "orange":
        setColor("#FDC007");
        break;

      case "green":
        setColor("#198754");
        break;

      case "grey":
        setColor("#6C747C");
        break;

      case "dark":
        setColor("#202528");
        break;

      case "white":
        setColor("#F9F8FA");
        break;

      default:
        setColor("black");
    }
  };
  return (
    <div
      className="container w-100 h-screen "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <button
          className="btn btn-primary flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl "
          name="blue"
          onClick={handleClick}
        >
          BLUE
        </button>
        <button
          className="btn btn-danger flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl"
          name="red"
          onClick={handleClick}
        >
          RED
        </button>
        <button
          className="btn btn-warning flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl text-white"
          name="orange"
          onClick={handleClick}
        >
          ORANGE
        </button>
        <button
          className="btn btn-success flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl"
          name="green"
          onClick={handleClick}
        >
          GREEN
        </button>
        <button
          className="btn btn-secondary flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl"
          name="grey"
          onClick={handleClick}
        >
          GREY
        </button>
        <button
          className="btn btn-dark flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl"
          name="dark"
          onClick={handleClick}
        >
          DARK
        </button>
        <button
          className="btn btn-light flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl"
          name="white"
          onClick={handleClick}
        >
          WHITE
        </button>
      </div>
    </div>
  );
}

export default App;
