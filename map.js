const map = (predicate, array) => {
  return array.reduce((acc, item) => {
    acc.push(predicate(item));
    return acc;
  }, []);
};

const predicate = (val) => val.toUpperCase();

const res = map(predicate, ["this", "is", "a", "line", "of", "text"]);

console.log(res);
