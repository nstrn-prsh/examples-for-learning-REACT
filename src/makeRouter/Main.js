import Router from "./Router/Router";
import Home from "./Home";
import Blog from "./Blog";
import Auth from "./Auth";
import Link from "./Router/Link";

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
