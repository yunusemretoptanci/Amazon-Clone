import React from "react";
import { render } from "react-dom";
import App from "./App";
import { StateProvider } from "./StateProvide";
import reducer, { initialState } from "./reducer";
import "./style.css"
render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
