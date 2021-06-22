import { render } from "react-dom";
import { StrictMode } from "react";
import "./index.css";
// import App1 from './App/App1';
// import App2 from './App/App2';
// import App3 from './App/App3';
import App4 from './App/App4';
// import App5 from "./App/App5";
// import App6 from "./App/App6";

render(
     <StrictMode>
          {/* <App1 /> */}
          {/* <App2 /> */}
          {/* <App3/> */}
          <App4 />
          {/* <App5 /> */}
          {/* <App6 /> */}
     </StrictMode>,
     document.getElementById("root")
);
