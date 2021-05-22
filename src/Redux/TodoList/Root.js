import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logDispatch, logState } from "./enhancers";

const initState = [
     //  {
     //       id: 1,
     //       text: "task1",
     //       completed: false,
     //  },
];

const todoReducer = (state = initState, action) => {
     switch (action.type) {
          case "ADD_TODO":
               return [
                    ...state,
                    {
                         id: action.id,
                         text: action.text,
                         completed: false,
                    },
               ];

          case "TOGGLE_TODO":
               return state.map((todo) => {
                    if (todo.id !== action.id) return todo;
                    else
                         return {
                              ...todo,
                              completed: !todo.completed,
                         };
               });

          default:
               return state;
     }
};

const filterReducer = (store = "SHOW_ALL", action) => {
     switch (action.type) {
          case "FILTER_TODO":
               return action.filter;
          default:
               return store;
     }
};

// const combineReducers = (reducers) => {
//      return (state = {}, action) => {
//           return Object.keys(reducers).reduce((nextState, key) => {
//                nextState[key] = reducers[key](state[key], action);
//                return nextState;
//           }, {});
//      };
// };

const reducers = {
     todo: todoReducer,
     filter: filterReducer,
};

const todoApp = (state = {}, action) => {
     return {
          todo: todoReducer(state.todo, action),
          filter: filterReducer(state.filter, action),
     };
};

// const preloadedState = [
//      {
//           id: 1,
//           text: "task1",
//           completed: false,
//      },
// ];

/*const enhancers = compose(logDispatch, logState);*/
// const print1 = (storeApi) => (next) => (action) => {
//      console.log("action:", action);
//      next(action);
//      console.log("new state:", storeApi.getState());
// };

// function print2(storeApi) {
//      return function wrapDispatch(next) {
//          return function handleAction2(action) {
//                console.log(2);
//                return next(action);
//           }
//      };
// }

// function print3(storeApi) {
//      return function wrapDispatch(next) {
//           return function handleAction3(action) {
//                console.log(3);
//                return next(action);
//           }
//      };
// }

// const middleWare = applyMiddleware(print1, print2, print3);

// export const store = createStore(todoApp);
// export const store = createStore(
//      combineReducers(reducers),
//      preloadedState,
//      middleWare
// enhancers
// );

/**** 29 ****/
/*const fetchTodosMiddleWare = (storeApi) => (next) => (action) => {
     if (action.type === "todos/fetchTodos") {
          client.get("todos").then((todos) => {
               storeApi.dispatch({
                    type: "todos/todosLoaded",
                    payload: todos,
               });
          });
     }
     next(action);
};*/

//  sepas action  "todos/todosLoaded" mitone todo haro be list ezafe kone

const fetchTodosMiddleWare = (storeApi) => (next) => (action) => {
     if (typeof action === "function") {
          return action(storeApi.dispatch, storeApi.getState);
     }
     return next(action);
};

const composeEnhancer = composeWithDevTools(
     applyMiddleware(fetchTodosMiddleWare)
);

export const store = createStore(combineReducers(reducers), composeEnhancer);
