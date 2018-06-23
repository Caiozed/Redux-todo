import React from "react";
import ReactDOM from "react-dom";
import Store from "./store.js";

import Home from "./views/home.js";

import "./styles.css";

const rootElement = document.getElementById("root");

function App() {
  return (
    <div className="App">
      <Home {...Store.getState()} />
    </div>
  );
}

const render = () => {
  ReactDOM.render(<App />, rootElement);
};

Store.subscribe(render);
render();
