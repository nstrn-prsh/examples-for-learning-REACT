import { Fragment } from "react";
import Clock from "./Components/Clock/Clock";
import StickyNote from "./Components/StickyNote/StickyNote";

function App() {
     return (
          <Fragment>
               <Clock />
               <StickyNote />
          </Fragment>
     );
}

export default App;