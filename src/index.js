import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Store from "./store/Store.js";
import { Context } from "./context/context";

//
function Main() {
  let defaultSizeFiles = 0;

  for (let i = 0; i < Store.length; i++) {
    defaultSizeFiles = defaultSizeFiles + Store[i].getSize;
  }
  const [object, setObject] = useState(Store.length);
  const [size, setSize] = useState(defaultSizeFiles);
  return (
    <Context.Provider value={{ object, setObject, size, setSize }}>
      <App store={Store} />
    </Context.Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
