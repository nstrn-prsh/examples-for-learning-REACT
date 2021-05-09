import {createStore} from 'redux'

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

export const store= createStore(todoReducer)
