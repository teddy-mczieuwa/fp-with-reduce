const none = (predicate, array) =>
  array.reduce((acc, val) => acc && !predicate(val), true);
const isEven = (val) => val % 2 == 0;
const res = none(isEven, [1, 3, 5, 7]);
console.log(res);
