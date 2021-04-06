import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./toast.css";

const Toast = ({ type = "info", msg = "" }) => {
     useEffect(() => {
          if (msg) toast[type](msg);
     }, [type, msg]);
     
     return (
          <ToastContainer
               position='top-center'
               autoClose={2000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover={false}
          />
     );
};

export default Toast;
