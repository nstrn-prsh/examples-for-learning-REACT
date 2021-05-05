import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Location = () => {
     const location = useLocation();

     useEffect(() => {
          console.log(location.pathname);
     }, [location]);

     return null;
};

export default Location;
