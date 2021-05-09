import { store } from "../Redux/TodoList/Root";
import TodoMain from "./../Redux/TodoList/TodoMain";
import { Provider } from "react-redux";

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
