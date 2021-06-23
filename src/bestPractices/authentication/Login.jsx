import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { useAuthDispatch, useAuthState } from "./context/auth-context";
import { actionTypes } from "./context/reducer";

const fetchToken = async (username, password) => {
     return axios
          .post("http://localhost:3001/login", {
               username,
               password,
          })
          .then((response) => response.data);
};

const fetchCurrentUserInfo = (token) => {
     return axios
          .get("http://localhost:3001/users/me", {
               headers: {
                    authorization: token,
               },
          })
          .then((response) => response.data);
};

export default function Login() {
     const [getUserName, setUserName] = useState("");
     const [getPassword, setPassword] = useState("");
     const [token, setToken] = useState(null);

     const dispatch = useAuthDispatch();
     const { loading } = useAuthState();

     const handleLogin = (e) => {
          e.preventDefault();
          dispatch({
               type: actionTypes.LOGIN_REQUEST,
          });
          fetchToken(getUserName, getPassword).then(({ success, data }) => {
               if (success) {
                    setToken(data);
               }
          });
     };

     // check mikonim ke token darim ya na
     useLayoutEffect(() => {
          const token = localStorage.getItem("token");
          if (token) {
               dispatch({
                    type: actionTypes.LOGIN_REQUEST,
               });
               setToken(token);
          }
     }, [dispatch]);

     //  harzaman ke token taghiir kar ye request samte server beferestim va etelaate karbar ro begirim
     useEffect(() => {
          if (token) {
               fetchCurrentUserInfo(token).then(({ success, data }) => {
                    if (success) {
                         localStorage.setItem("token", token);
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
          <>
               {loading ? (
                    <p>loading</p>
               ) : (
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
               )}
          </>
     );
}
