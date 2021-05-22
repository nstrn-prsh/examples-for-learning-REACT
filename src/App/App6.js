import { store } from "../Redux/TodoList/Root";
import TodoMain from "./../Redux/TodoList/TodoMain";
import { Provider } from "react-redux";

store.dispatch({
     type: "todos/fetchTodos",
});

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
