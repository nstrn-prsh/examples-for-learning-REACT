import { useAuth } from "./../Context/AuthUser";
import { Route, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
     const location = useLocation();
     const { isAuthenticated } = useAuth();

     return (
          <Route {...rest}>
               {isAuthenticated ? (
                    children
               ) : (
                    <Redirect
                         to={{
                              pathname: "login",
                              // state inja marboot be history mishe
                              // address felie user ro negah midarim ta bad az login be hamin safhe biad
                              state: {
                                   from: location,
                              },
                         }}
                    />
               )}
          </Route>
     );
}
