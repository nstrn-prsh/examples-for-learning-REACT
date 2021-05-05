// import Main from './../makeRouter/Main';
// import Root from '../Routing/reactRouterDom/Root';
import { BrowserRouter as Router } from "react-router-dom";
/*
import MainLogin from "./../Routing/loginAuth/MainLogin";
import { AuthProvider } from "./../Routing/loginAuth/Context/AuthUser";
*/
import ModalSwitch from "../Routing/modal/ModalSwitch";

function App5() {
     return (
          <>
               {/* <Main /> */}
               {/* <Root/> */}
               {/* <Router>
                    <AuthProvider>
                         <MainLogin />
                    </AuthProvider>
               </Router> */}
               <Router>
                    <ModalSwitch />
               </Router>
          </>
     );
}

export default App5;
