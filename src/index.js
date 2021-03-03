import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";

setInterval(() => {
     render(
          <React.StrictMode>
               <App />
          </React.StrictMode>,
          document.getElementById("root")
     );
}, 1000);
