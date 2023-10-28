import React, { useState } from "react";

function App() {
  return (
    <div className="container w-100 h-screen">
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <button className="btn btn-primary flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl">
          BLUE
        </button>
        <button className="btn btn-danger flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl">
          RED
        </button>
        <button className="btn btn-warning flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl">
          ORANGE
        </button>
        <button className="btn btn-success flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl">
          GREEN
        </button>
        <button className="btn btn-secondary flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl">
          GREY
        </button>
        <button className="btn btn-dark flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl">
          DARK
        </button>
        <button className="btn btn-light flex flex-wrap justify-center me-2 shadow-lg  px-3 py-2 rounded-3xl">
          WHITE
        </button>
      </div>
    </div>
  );
}

export default App;
