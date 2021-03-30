import React from "react";
import Container from "./Container";

const Containers = (props) => {
     return (
          <>
               <Container
                    classType={`clash-card__level clash-card__level--${props.title}`}
               >
                    {props.level}
               </Container>
               <Container classType='clash-card__unit-name'>
                    {props.name}
               </Container>
               <Container classType='clash-card__unit-description'>
                    {props.description}
               </Container>
          </>
     );
};

export default Containers;
