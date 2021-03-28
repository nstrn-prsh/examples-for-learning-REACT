import React, { Component,createRef } from "react";
import "./login.css";

export default class Login extends Component {
    /* note: kar mikone vali azash estefade nemikonim 
    chon kharej az react amal mikone
    age component ha ziad beshe
    ya age component ziad render beshe dorost kar nemikone
     componentDidMount() {
          document.querySelector("[type='text']").focus();
     }
     */
    constructor(props){
        super(props)
        this.autoFocus = createRef()
    }

    componentDidMount(){
        this.autoFocus.current.focus()
    }

     render() {
          return (
               <div className='login'>
                    <h1>Login</h1>
                    <form method='post'>
                         <input
                              type='text'
                              name='u'
                              placeholder='Username'
                              required='required'
                              ref={this.autoFocus}
                         />
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
     }
}
