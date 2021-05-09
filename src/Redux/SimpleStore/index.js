console.log(window.Redux);

// const createStore = (reducer) => {
//      let state;
//      const dispatch = (action) => {
//           state = reducer(state, action);
//      };

//      const getState = () => state;
//      dispatch({});
//      return { dispatch, getState };
// };

function counter(state = 0, action) {
     switch (action.type) {
          case "INCREMENT":
               return state + 1;
          case "DECREMENT":
               return state - 1;
          default:
               return state;
     }
}

// const store = createStore(counter);
// console.log(store);
const store = window.Redux.createStore(counter);
console.log(store);
console.log(store.getState());

function Counter({ value, onIncrement, onDecrement }) {
     return (
          <>
               <p>{value}</p>
               <button onClick={onIncrement}>increment</button>
               <button onClick={onDecrement}>decrement</button>
          </>
     );
}

// const render = () => (document.body.innerText = store.getState());
const render = () => {
     window.ReactDOM.render(
          <Counter
               value={store.getState()}
               onIncrement={() => store.dispatch({ type: "INCREMENT" })}
               onDecrement={() => store.dispatch({ type: "DECREMENT" })}
          />,
          document.getElementById("main")
     );
};

const unsubscribe = store.subscribe(render);

render();
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
unsubscribe();
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());
