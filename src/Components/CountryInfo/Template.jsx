import React, { useState, useEffect } from "react";
import Summary from "./Template/Summary";
import Card from "./Template/Card";
import "./template.css";
import wiki from "wikijs";

const Template = () => {
     const [getCountry, setCountry] = useState("australia");
     const [getSummary, setSummary] = useState("");
     const [getInfo, setInfo] = useState(null);

     useEffect(() => {
          async function getData() {
               const page = await wiki().page(getCountry);
               const [summary, info] = await Promise.all([
                    page.summary(),
                    page.info(),
               ]);
               setSummary(summary);
               setInfo(info);
          }
          getData();
     }, [getCountry]);

     const selectedCountry = (name) => {
          setCountry(name);
     };

     return (
          <>
               <div style={{ margin: "30px" }}>
                    <Card selectedCountry={selectedCountry} info={getInfo} />
                    <div className='row mt-3'>
                         <Summary summary={getSummary} />
                    </div>
               </div>
          </>
     );
};

export default Template;
