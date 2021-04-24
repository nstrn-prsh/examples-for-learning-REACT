import React, { useEffect } from "react";
import { get, HttpClient } from "./Http";

const httpClient = new HttpClient();

const Implement = () => {
     useEffect(() => {
         /* ***** 1s way ***** */
          //   get("posts", { params: { id: 2 } }).then((res) => console.log(res));
          /* ***** 2nd way ***** */
          httpClient
               .get("posts", { params: { id: 2 } })
               .then((res) => console.log(res));
     }, []);
     return <p>hello world!</p>;
};

export default Implement;
