import Router from "./Router/Router";
import Home from "./Home";
import Blog from "./Blog";
import Auth from "./Auth";

const Main = () => {
     return (
          <>
               <Router path='/'>
                    <Home />
               </Router>
               <Router path='/blog'>
                    <Blog />
               </Router>
               <Router path='/auth'>
                    <Auth />
               </Router>
          </>
     );
};

export default Main;
