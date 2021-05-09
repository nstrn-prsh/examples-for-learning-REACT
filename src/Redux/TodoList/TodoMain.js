// import { useSelector, useDispatch } from "./storeProvider";
import { useSelector, useDispatch } from "react-redux";
let todoId = 0;

const TodoMain = ({ store }) => {
     const todo = useSelector((state) => state);
     const dispatch = useDispatch()

     const handleInputValue = (event) => {
          if ("Enter" === event.code) {
               const { target } = event;
               dispatch({
                    type: "ADD_TODO",
                    id: todoId++,
                    text: target.value,
               });
               target.value = "";
          }
     };

     const todos = todo
          ? todo.map((todo) => (
                 <li
                      key={todo.id}
                      onClick={() =>
                         dispatch({
                                type: "TOGGLE_TODO",
                                id: todo.id,
                           })
                      }
                      style={{
                           textDecoration: todo.completed
                                ? "line-through"
                                : "none",
                      }}
                 >
                      {todo.text}
                 </li>
            ))
          : null;

     return (
          <div style={{ margin: "50px" }}>
               <input type='text' onKeyDown={(e) => handleInputValue(e)} />
               <ul>{todos}</ul>
          </div>
     );
};

export default TodoMain;
