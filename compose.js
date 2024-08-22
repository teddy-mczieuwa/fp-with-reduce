const compose =
  (...fns) =>
  (initialValue) =>
    fns.reduceRight((x, fn) => fn(x), initialValue);

const add = (val) => val + 2;
const multiply = (val) => val * 4;
const subtract = (val) => val - 1;

const func = compose(subtract, multiply, add);

const res = func(4);

console.log(res);
