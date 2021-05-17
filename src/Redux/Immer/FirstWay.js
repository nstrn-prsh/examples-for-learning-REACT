import produce from "immer";

const baseState = [
     {
          todos: "Learn typescript",
          done: true,
     },
     {
          todos: "Try immer",
          done: false,
     },
];

const nextState = produce(baseState, (draftState) => {
     draftState.push({ todos: "Tweet about it" });
     draftState[1].done = true;
});

console.log(baseState);
console.log(nextState);

// node FirstWay.js
