import { Fragment } from "react";
import Clock from "./Components/Clock/Clock";
import StickyNote from "./Components/StickyNote/StickyNote";
import OnClick from "./Components/Event/OnClick";

function App() {
     return (
          <Fragment>
               <Clock />
               <StickyNote />
               <OnClick />
          </Fragment>
     );
}

export default App;
