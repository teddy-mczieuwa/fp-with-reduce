const some = (predicate, array) => {
  return array.reduce((acc, item) => acc || predicate(item), false);
};

const predicate = (val) => val < 2;

const res = some(predicate, [4, 2, 5, 6, 3, 1]);

console.log(res);
