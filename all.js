const all = (predicate, array) =>
  array.reduce((acc, item) => acc && predicate(item), true);

const predicate = (val) => val % 2 == 0;

const res = all(predicate, [2, 4, 6, 8]);

console.log(res);
