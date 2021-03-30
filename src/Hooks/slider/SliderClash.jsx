import React, { useState, useEffect } from "react";
import Arrow from "./Arrow";
import Card from "./Card/Card";
import "./clash.scss";

const SliderClash = () => {
     const [getHeroes, setHeroes] = useState([]);
     const [getCursor, setCursor] = useState(0);

     useEffect(() => {
          fetch("http://localhost:4000/heroes")
               .then((res) => res.json())
               .then((heroes) => setHeroes(heroes));
     }, []);

     const handleNext = () => {
          const next = getCursor + 1 < getHeroes.length ? getCursor + 1 : 0;
          setCursor(next);
     };
     const handlePrev = () => {
          const prev = getCursor - 1 < 0 ? getHeroes.length - 1 : getCursor - 1;
          setCursor(prev);
     };

     return (
          <div className='slide-container'>
               {!getHeroes.length ? (
                    <p>please wait!</p>
               ) : (
                    <div className='wrapper'>
                         <Arrow pos={true} handleCursor={handlePrev} />
                         <Card hero={getHeroes[getCursor]} />
                         <Arrow pos={false} handleCursor={handleNext} />
                    </div>
               )}
          </div>
     );
};

export default SliderClash;
