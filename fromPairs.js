const fromPairs = (list) => {
  return list.reduce((acc, item) => {
    const [key, value] = item;
    acc[key] = value;
    return acc;
  }, {});
};

const res = fromPairs([
  ["name", "Teddy"],
  ["color", "green"],
]);

console.log(res);
