import React from "react";
import List from "./List";

const Aside = (props) => {
     return (
          <aside>
               <ul>
                    {props.posts
                         ? props.posts.map((item, index) => (
                                <List
                                     key={index}
                                     handleCurrentPost={props.handleCurrentPost}
                                     index={index}
                                     title={item.title}
                                />
                           ))
                         : null}
               </ul>
          </aside>
     );
};

export default Aside;
