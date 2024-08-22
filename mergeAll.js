const mergeAll = (list) => {
  return list.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      acc[key] = item[key];
    });
    return acc;
  }, {});
};

const res = mergeAll([
  { js: "reduce" },
  { elm: "fold" },
  { java: "collect" },
  { js: "reduce" },
]);

console.log(res);
