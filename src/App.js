import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const handleClick = (event) => {
    const name = event.target.name;
    if (name === "blue") {
      setColor("#0D6CFA");
    } else if (name === "red") {
      setColor("#DA3544");
    } else if (name === "orange") {
      setColor("#FDC007");
    } else if (name === "green") {
      setColor("#198754");
    } else if (name === "grey") {
      setColor("#6C747C");
    } else if (name === "dark") {
      setColor("#202528");
    } else if (name === "white") {
      setColor("#F9F8FA");
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
          className="btn btn-warning flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl"
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
