// import { useSelector, useDispatch } from "./storeProvider";
import { useSelector, useDispatch } from "react-redux";

let todoId = 0;

const getFilter = (filter, todo) => {
     switch (filter) {
          case "SHOW_ALL":
               return todo;
          case "COMPLETED":
               return todo.filter((todo) => todo.completed);
          case "PENDING":
               return todo.filter((todo) => !todo.completed);
          default:
               return todo
     }
};

const TodoMain = ({ store }) => {
     const todo = useSelector((state) => state.todo);
     const filter = useSelector((state) => state.filter);
     console.log(filter);

     const dispatch = useDispatch();

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
          ? getFilter(filter , todo).map((todo) => (
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

     const handleFilter = (filter) => {
          dispatch({
               type: "FILTER_TODO",
               filter,
          });
     };

     return (
          <div style={{ margin: "50px" }}>
               <input type='text' onKeyDown={(e) => handleInputValue(e)} />
               <button onClick={() => handleFilter("SHOW_ALL")}>all</button>
               <button onClick={() => handleFilter("COMPLETED")}>
                    completed
               </button>
               <button onClick={() => handleFilter("PENDING")}>pending</button>
               <ul>{todos}</ul>
          </div>
     );
};

export default TodoMain;
