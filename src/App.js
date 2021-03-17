import { Fragment } from "react";
// a
import Clock from "./Components/Clock/Clock";
import StickyNote from "./Components/StickyNote/StickyNote";
import OnClick from "./Components/Event/OnClick";
import Box from "./Components/Box/Box";
import Conditional from "./Components/Conditional/Conditional";
// b
import IncreaseCounter from "./LifeCycles/IncreaseCounter/IncreaseCounter";

function App() {
     return (
          <Fragment>
               {/* a */}
               {/* <Clock /> */}
               {/* <StickyNote /> */}
               {/* <OnClick /> */}
               {/* <Box /> */}
               {/* <Conditional /> */}
               {/* b */}
               <IncreaseCounter />
          </Fragment>
     );
}

export default App;
