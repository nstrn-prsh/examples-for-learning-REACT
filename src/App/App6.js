import { store } from '../Redux/TodoList/Root';
import TodoMain from './../Redux/TodoList/TodoMain';

const App6 = () => {
    return (
        <>
        <TodoMain store={store} />
        </>
      );
}
 
export default App6;