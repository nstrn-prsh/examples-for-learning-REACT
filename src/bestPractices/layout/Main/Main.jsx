import React from "react";
import SectionServices from "./SectionServices/SectionServices";
import SectionSkills from "./SectionSkills/SectionSkills";
import SectionPortfolio from "./SectionPortfolio/SectionPortfolio";
import SectionBlog from "./SectionBlog/SectionBlog";
import SectionContact from "./SectionContact/SectionContact";

const Main = () => {
     return (
          <div className='main' style={{ margin: "100px auto", width:'90%' }}>
               <SectionServices />
               <SectionSkills />
               <SectionPortfolio />
               <SectionBlog />
               <SectionContact />
          </div>
     );
};

export default Main;
