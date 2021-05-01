import React from "react";
import { render } from "react-dom";
import "./index.css";
// import App1 from './App/App1';
// import App2 from './App/App2';
// import App3 from './App/App3';
// import App4 from './App/App4';
import App5 from "./App/App5";

render(
     <React.StrictMode>
          {/* <App1 /> */}
          {/* <App2 /> */}
          {/* <App3/> */}
          {/* <App4 /> */}
          <App5 />
     </React.StrictMode>,
     document.getElementById("root")
);
