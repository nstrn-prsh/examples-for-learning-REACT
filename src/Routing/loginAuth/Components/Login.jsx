import { useAuth } from "../Context/AuthUser";
import { useHistory, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

export default function Login() {
     const history = useHistory();
     const location = useLocation();
     const {
          signInWithEmailAndPassword,
          isAuthenticated,
          isPending,
     } = useAuth();
     const { from } = location.state || { from: { pathname: "/" } };

     useLayoutEffect(() => {
          history.replace(from);
     }, [from, history, isAuthenticated]);

     return (
          <>
               {isPending ? (
                    <p>loading</p>
               ) : (
                    <button
                         onClick={() => signInWithEmailAndPassword("udemy", 1)}
                    >
                         Login
                    </button>
               )}
          </>
     );
}
