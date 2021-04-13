import React from "react";
import "./Form.css";
import Custom from "./Custom";

const Login = () => {
     const { getForm, handleForm } = Custom({
          email: "",
          password: "",
     });

     return (
          <form>
               <div className='login'>
                    <input
                         value={getForm.email}
                         onChange={handleForm}
                         type='email'
                         name='email'
                         placeholder='email'
                         required='required'
                    />
                    <input
                         value={getForm.password}
                         onChange={handleForm}
                         type='password'
                         name='password'
                         placeholder='password'
                         required='required'
                    />
                    <button
                         type='submit'
                         className='btn btn-primary btn-block btn-large'
                    >
                         Let me in.
                    </button>
               </div>
          </form>
     );
};

export default Login;
