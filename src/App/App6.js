// import { store } from "../Redux/TodoList/Root";
// import TodoMain from "./../Redux/TodoList/TodoMain";
import { Provider } from "react-redux";
// import { client } from "../Redux/TodoList/client/client";
import store from "./../reduxToolkit/store";
import App from "../reduxToolkit/App";
import { fetchTodos } from "./../reduxToolkit/todosSlice";

/*
const fetchTodos = (dispatch, getState) => {
     client.get("todos").then((todos) => {
          dispatch({
               type: "todos/todosLoaded",
               payload: todos,
          });
     });
};

store.dispatch(fetchTodos);
*/

store.dispatch(fetchTodos());
store.dispatch(fetchTodos());
store.dispatch(fetchTodos());

// f40: cancellation
const prom = store.dispatch(fetchTodos());
prom.abort();

const App6 = () => {
     return (
          <>
               <Provider store={store}>
                    {/* <TodoMain /> */}
                    <App />
               </Provider>
          </>
     );
};

export default App6;
