import React, { useState } from "react";
import shortid from "shortid";
import Item from "./Item";
import "./list.css";

const List = () => {
     const [getItems, setItems] = useState([]);

     return (
          <div>
               <button
                    className='button'
                    onClick={(e) =>
                         setItems((items) => [shortid.generate(), ...items])
                    }
               >Add Item</button>
               <br />
               
               <div className='lists'>
                    <ul>
                         <h1 className='title'>{`key={index}`}</h1>
                         <br />
                         {getItems.map((id, index) => (
                              <Item key={index} name={id} />
                         ))}
                    </ul>

                    <ul>
                         <h1 className='title'>{`key={Math.random()}`}</h1>
                         <br />
                         {getItems.map((id) => (
                              <Item key={Math.random()} name={id} />
                         ))}
                    </ul>

                    <ul>
                         <h1 className='title'>{`key={uniqueValue}`}</h1>
                         <br />
                         {getItems.map((id) => (
                              <Item key={`${id}`} name={id} />
                         ))}
                    </ul>
               </div>
          </div>
     );
};

export default List;
