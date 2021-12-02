import React from "react";
import Header from "./header";

import "./main.css";

function Main(props) {
  return (
    <>
      <Header {...props} />
      <main className="content container-fluid">
        <div className="p-3 mt-3 contents ">{props.children}</div>
      </main>
    </>
  );
}

export default Main;
