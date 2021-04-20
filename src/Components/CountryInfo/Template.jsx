import React, { useState, useEffect } from "react";
import Summary from "./Template/Summary";
import Card from "./Template/Card";
import "./template.css";
import wiki from "wikijs";

const Template = () => {
     const [getCountry, setCountry] = useState("australia");
     const [getSummary, setSummary] = useState("");
     const [getInfo, setInfo] = useState(null);
     const [getFlag, setFlag] = useState(null);

     useEffect(() => {
          async function getData() {
               const page = await wiki().page(getCountry);
               // wiki({ apiUrl: "https://fa.wikipedia.org/w/api.php" });
               // await page.langlinks()
               const [summary, info, images] = await Promise.all([
                    page.summary(),
                    page.info(),
                    page.images(),
               ]);

               const flag = info.imageFlag.replace(/\s/g, "-");
               images.some((image) => {
                    if (image.includes(flag)) {
                         setFlag(image);
                         return true;
                    }
                    return false;
               });

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
                    <Card
                         selectedCountry={selectedCountry}
                         info={getInfo}
                         flag={getFlag}
                    />
                    <div className='row mt-3'>
                         <Summary summary={getSummary} />
                    </div>
               </div>
          </>
     );
};

export default Template;
