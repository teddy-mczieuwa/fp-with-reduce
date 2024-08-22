const reject = (predicate, array) => {
  return array.reduce((acc, item) => {
    if (predicate(item) === false) {
      acc.push(item);
    }
    return acc;
  }, []);
};

const isEven = (val) => val % 2 === 0;
const res = reject(isEven, [3, 65, 8, 6, 1, 4]);
console.log(res);
