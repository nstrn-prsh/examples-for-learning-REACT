import React from "react";

const List = (props) => {
     return (
          <li onClick={(e) => props.handleCurrentPost(props.index)}>
               {props.title}
          </li>
     );
};

export default List;
