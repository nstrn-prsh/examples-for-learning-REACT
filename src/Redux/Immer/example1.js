import produce from "immer";

const foo = [1, 2, 3, 4];
const mapper = produce((draft, index) => draft * index);
console.log(mapper);
const nextFoo = foo.map(mapper);
console.log(nextFoo);

// node example1.js
