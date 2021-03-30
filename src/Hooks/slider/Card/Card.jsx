import React from "react";
import CardImg from "./CardImg";
import Containers from "./Containers";
import Footer from "./Footer";

const Card = ({ hero }) => {
     const title= hero.title

     return (
          <div className={`clash-card ${title}`}>
               <CardImg src={hero.img} alt={title} />
               <Containers
                    level={hero.level}
                    name={hero.name}
                    description={hero.description}
                    title={title}
               />
               <Footer title={title} units={hero.units} />
          </div>
     );
};

export default Card;
