const arrayToObject = (key, array) =>
  array.reduce((acc, item) => {
    const value = item[key];
    acc[value] = item;
    return acc;
  }, {});

const res = arrayToObject("name", [
  { name: "Teddy", color: "green" },
  { name: "Edward", color: "red" },
  { name: "Alozieuwa", color: "red" },
]);
console.log(res);
