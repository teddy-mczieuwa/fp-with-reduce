const flatten = (list) => list.reduce((acc, item) => acc.concat(item), []);
const res = flatten([
  [2, 5, 9, 7],
  [3, 4, 6],
]);

console.log(res);
