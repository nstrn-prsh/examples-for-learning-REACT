import { useAuth } from "./Context/AuthUser";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Panel from "./Components/Panel";
import PrivateRoute from './Components/PrivateRoute';

const MainLogin = () => {
     const auth = useAuth();
     console.log(auth);

     return (
          <>
               <ul>
                    <li>
                         <Link to='/'>home</Link>
                    </li>
                    <li>
                         <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                         <Link to='/panel'>Panel</Link>
                    </li>
               </ul>

               <Switch>
                    <Route exact path='/'>
                         <Home />
                    </Route>
                    <Route path='/blog'>
                         <Blog />
                    </Route>
                    <PrivateRoute path='/panel'>
                         <Panel />
                    </PrivateRoute>
               </Switch>
          </>
     );
};

export default MainLogin;
