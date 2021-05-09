import { createStore, combineReducers } from "redux";

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
     filter:filterReducer,
};

// const todoApp = (state={}, action) => {
//      return {
//           todo: todoReducer(state.todo, action),
//           filter: filterReducer(state.filter, action),
//      };
// };

// export const store = createStore(todoApp);
export const store = createStore(combineReducers(reducers));
