import Home from "./Home";
import Blog from "./Blog";
import Auth from "./Auth";
import { Route } from "react-router-dom";

const Main = () => {
     return (
          <>
               <Route exact path='/'>
                    <Home />
               </Route>
               <Route path='/blog'>
                    <Blog />
               </Route>
               <Route path='/auth'>
                    <Auth />
               </Route>
          </>
     );
};

export default Main;
