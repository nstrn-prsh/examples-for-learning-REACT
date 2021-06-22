import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthState } from "./context/auth-context";
import { actionTypes } from "./context/reducer";

const fetchToken = async (userName, password) => {
     return axios
          .post("http://localhost:3001/login", {
               userName,
               password,
          })
          .then((res) => res.data);
};

const fetchCurrentUserInfo = (token) => {
     return axios
          .get("http://localhost:3001/login/users/me", {
               headers: {
                    authorization: token,
               },
          })
          .then((res) => res.data);
};

export default function Login() {
     const [getUserName, setUserName] = useState("");
     const [getPassword, setPassword] = useState("");
     const [token, setToken] = useState(null);

     const dispatch = useAuthState();

     const handleLogin = (e) => {
          e.preventDefault();
          fetchToken(getUserName, getPassword).then((success, data) => {
               if (success) {
                    setToken(data);
               }
          });
     };

     //  harzaman ke token taghiir kar ye request samte server beferestim va etelaate karbar ro begirim
     useEffect(() => {
          if (token) {
               fetchCurrentUserInfo(token).then(({ success, data }) => {
                    if (success) {
                         dispatch({
                              type: actionTypes.LOGIN_SUCCESS,
                              payload: {
                                   user: data,
                                   token,
                              },
                         });
                    }
               });
          }
     }, [token, dispatch]);

     return (
          <div className='login'>
               <h1>Login</h1>
               <form method='post' onSubmit={handleLogin}>
                    <input
                         type='text'
                         value={getUserName}
                         onChange={(e) => setUserName(e.target.value)}
                         placeholder='Username'
                         required='required'
                    />
                    <input
                         type='password'
                         value={getPassword}
                         onChange={(e) => setPassword(e.target.value)}
                         placeholder='Password'
                         required='required'
                    />
                    <button
                         type='submit'
                         className='btn btn-primary btn-block btn-large'
                    >
                         Let me in.
                    </button>
               </form>
          </div>
     );
}
