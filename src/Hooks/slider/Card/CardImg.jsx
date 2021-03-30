import React from "react";

const CardImg = (props) => {
     return (
          <div className={`clash-card__image clash-card__image--${props.alt}`}>
               <img src={props.src} alt={props.alt} />
          </div>
     );
};

export default CardImg;
