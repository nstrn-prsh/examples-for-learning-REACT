import { Fragment } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// a
import Clock from "./Components/Clock/Clock";
import StickyNote from "./Components/StickyNote/StickyNote";
import OnClick from "./Components/Event/OnClick";
import Box from "./Components/Box/Box";
import Conditional from "./Components/Conditional/Conditional";
// b
import IncreaseCounter from "./LifeCycles/IncreaseCounter/IncreaseCounter";
import IpGeoLocation from "./LifeCycles/componentDidMount/IpGeoLocation";
import Posts from "./LifeCycles/componentDidUpdate/Posts";
import Clock2 from "./LifeCycles/componentWillUnmount/Clock2";

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
               {/* <IncreaseCounter /> */}
               {/* <IpGeoLocation /> */}
               {/* <Posts /> */}
               <Clock2 />
          </Fragment>
     );
}

export default App;
