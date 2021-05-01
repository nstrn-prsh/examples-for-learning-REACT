import Home from "./Home";
import Blog from "./Blog";
import Auth from "./Auth";
import { Route, Switch, Link } from "react-router-dom";

const Main = () => {
     return (
          <>
               <ul>
                    <li>
                         <Link to='/'>Home page</Link>
                    </li>
                    <li>
                         <Link to='/blog'>Blog page</Link>
                    </li>
                    <li>
                         <Link to='/auth'>Auth page</Link>
                    </li>
               </ul>

               <Switch>
                    <Route path='/blog'>
                         <Blog />
                    </Route>
                    <Route path='/auth'>
                         <Auth />
                    </Route>
                    <Route exact path='/'>
                         <Home />
                    </Route>
               </Switch>
          </>
     );
};

export default Main;
