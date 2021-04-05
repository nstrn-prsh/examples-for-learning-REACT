import React, { useEffect, useState, useRef } from "react";
import "./login.css";

const Login = () => {
     const [getEmail, setEmail] = useState("");
     const [getError, setError] = useState();

     const autoFocus = useRef();

     useEffect(() => {
          autoFocus.current.focus();
          setError(false);
          fetch(`http://localhost:3000/user?email=${getEmail}`)
               .then((res) => res.json())
               .then((user) => {
                    if (user.length) {
                         setError(true);
                    }
               });
     }, [getEmail]);

     return (
          <div className='login'>
               <h1>Login</h1>
               <form method='post'>
                    <input
                         ref={autoFocus}
                         type='email'
                         name='u'
                         placeholder='Email'
                         required='required'
                         value={getEmail}
                         onChange={(e) => setEmail(e.target.value)}
                    />
                    {getError && <p>this email exists!</p>}
                    <input
                         type='password'
                         name='p'
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
};

export default Login;
