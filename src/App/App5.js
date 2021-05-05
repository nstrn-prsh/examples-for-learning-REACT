// import Main from './../makeRouter/Main';
// import Root from '../Routing/reactRouterDom/Root';
import { BrowserRouter } from "react-router-dom";
import MainLogin from "./../Routing/loginAuth/MainLogin";
import { AuthProvider } from "./../Routing/loginAuth/Context/AuthUser";

function App5() {
     return (
          <>
               {/* <Main /> */}
               {/* <Root/> */}
               <BrowserRouter>
                    <AuthProvider>
                         <MainLogin />
                    </AuthProvider>
               </BrowserRouter>
          </>
     );
}

export default App5;
