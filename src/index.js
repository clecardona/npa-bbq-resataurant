import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FoodProvider } from "./state/FoodProvider";

ReactDOM.render(
  <React.StrictMode>
    <FoodProvider>
      <App />
    </FoodProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
