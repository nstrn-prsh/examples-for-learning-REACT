const Note = (props) => {
     return (
          <li>
               <a href='#'>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
               </a>
          </li>
     );
};

export default Note;
