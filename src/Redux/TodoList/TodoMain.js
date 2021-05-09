import { useEffect, useState } from "react";

let todoId = 0;

const TodoMain = ({ store }) => {
     const [, forceUpdate] = useState(0);

     useEffect(() => {
          const unSubscribe = store.subscribe(() => forceUpdate((c) => c + 1));
          return () => unSubscribe();
     }, [store]);

     const handleInputValue = (event) => {
          if ("Enter" === event.code) {
               const { target } = event;
               store.dispatch({
                    type: "ADD_TODO",
                    id: todoId++,
                    text: target.value,
               });
               target.value = "";
          }
     };

     const todos = store.getState().map((todo) => (
          <li
               key={todo.id}
               onClick={() =>
                    store.dispatch({
                         type: "TOGGLE_TODO",
                         id: todo.id,
                    })
               }
               style={{
                    textDecoration: todo.completed ? "line-through" : "none",
               }}
          >
               {todo.text}
          </li>
     ));

     return (
          <div style={{ margin: "50px" }}>
               <input type='text' onKeyDown={(e) => handleInputValue(e)} />
               <ul>{todos}</ul>
          </div>
     );
};

export default TodoMain;
