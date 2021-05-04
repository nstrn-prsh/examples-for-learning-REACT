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
                    <li>
                         <Link to='/contact'>Contact page</Link>
                    </li>
                    <li>
                         <Link to='/link'>Children page</Link>
                    </li>
                    <li>
                         <Link to='/params/sample'>Params</Link>
                    </li>
                    <li>
                         <Link to='/params/sample/5'>Params w/ id</Link>
                    </li>
                    <li>
                         <Link to='/match/5'>Match</Link>
                    </li>
               </ul>

               {/* first priority */}
               <Route
                    path='/link'
                    children={() => (
                         <p>it appears whether path is correct or not!</p>
                    )}
               />

               <Switch>
                    {/* fourth priority */}
                    <Route path='/blog' component={Blog} />
                    {/* Best way */}
                    <Route path='/auth'>
                         <Auth />
                    </Route>
                    <Route exact path='/'>
                         <Home />
                    </Route>
                    {/* third priority */}
                    <Route path='/contact' render={() => <h1>hello!</h1>} />
                    {/* PARAMS */}
                    <Route exact path='/params/:slug'>
                         <Blog />
                    </Route>
                    <Route path='/params/:slug/:id'>
                         <Blog />
                    </Route>
                    {/* MATCH */}
                    <Route path='/match/:id' component={Auth} />
               </Switch>
          </>
     );
};

export default Main;
