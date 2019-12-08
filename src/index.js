import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import Store from "./services/Store";

import "./styles.css";

function App() {
  return (
    <Store>
      <Main />
    </Store>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
