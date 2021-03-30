import React from "react";
import FooterBox from "./FooterBox";

const Footer = (props) => {
     return (
          <div
               className={`clash-card__unit-stats clash-card__unit-stats--${props.title} clearfix`}
          >
               {props.units.map((info, index) => (
                    <FooterBox
                         stat={info.stat}
                         statValue={info.statValue}
                         key={index}
                    />
               ))}
          </div>
     );
};

export default Footer;
