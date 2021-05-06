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

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
unsubscribe();
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());
