import produce from "immer";

const initState = {
     numbers: [1, 2, 3],
};

/*const reducer = (state = initState, action) => {
     switch (action.type) {
          case "ADD_NUMBER":
               return {
                    ...state,
                    numbers: [...state.numbers, action.payload],
               };
          default:
               return state;
     }
};*/

// code bala ba estefade az Immer :
// :) easier
const immerReducer = produce((state, action) => {
     switch (action.type) {
          case "ADD_NUMBER":
               state.numbers.push(action.payload);
     }
}, initState);
