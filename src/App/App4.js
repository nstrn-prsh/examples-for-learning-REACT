import { Fragment } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// d
// import List from "../bestPractices/howToUseKeys/List";
// import HOC from "../bestPractices/hoc/HOC";
// import Provider from "./../bestPractices/contextApi/function/Provider";
// import Global from "./../bestPractices/contextApi/class/Global";
// import Container from './../bestPractices/pattern/container';
// import Implement from "../bestPractices/HttpClient/Implement";
// import Layout from './../bestPractices/layout/Layout';
import { AuthProvider } from "../bestPractices/authentication/context/auth-context";
import App from "./../bestPractices/authentication/App";

function App4() {
     return (
          <Fragment>
               {/* d */}
               {/* <List /> */}
               {/* <HOC /> */}
               {/* <Provider /> */}
               {/* <Global /> */}
               {/* <Container /> */}
               {/* <Implement /> */}
               {/* <Layout /> */}
               <AuthProvider>
                    <App />
               </AuthProvider>
          </Fragment>
     );
}

export default App4;
