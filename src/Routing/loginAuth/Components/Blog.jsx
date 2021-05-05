import { Prompt } from "react-router-dom";
import { useState } from 'react';

export default function Blog() {
     const [showPrompt, setShowPrompt] = useState(false)

     return (
          <>
               <h1>Blog</h1>

               {/* <Prompt message='are you sure?'/> */}

               <input onChange={()=> setShowPrompt(true)} />

               <Prompt
               when={showPrompt}
                    message={(location, action) => {
                         return location.pathname === "/auth"
                              ? true
                              : "you sure?" + location.pathname;
                    }}
               />
          </>
     );
}
