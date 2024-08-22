const pluck = (key, array) => {
  return array.reduce((acc, item) => {
    acc.push(item[key]);
    return acc;
  }, []);
};

const res = pluck("name", [
  { name: "Teddy" },
  { name: "Edward" },
  { name: "Alozieuwa" },
]);

console.log(res);
