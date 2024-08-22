const filter = (predicate, array) => {
  return array.reduce((acc, item) => {
    if (predicate(item) === true) {
      acc.push(item);
    }
    return acc;
  }, []);
};

const predicate = (val) => val > 3;

const res = console.log(filter(predicate, [2, 4, 5, 3, 1, 0]));
