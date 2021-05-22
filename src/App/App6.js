import { store } from "../Redux/TodoList/Root";
import TodoMain from "./../Redux/TodoList/TodoMain";
import { Provider } from "react-redux";
import { client } from "../Redux/TodoList/client/client";


const fetchTodos = (dispatch, getState) => {
     client.get("todos").then((todos) => {
          dispatch({
               type: "todos/todosLoaded",
               payload: todos,
          });
     });
};

store.dispatch(fetchTodos);

const App6 = () => {
     return (
          <>
               <Provider store={store}>
                    <TodoMain />
               </Provider>
          </>
     );
};

export default App6;
