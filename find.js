const find = (predicate, array) => {
  return array.reduce((acc, item) => {
    if (acc !== undefined) {
      return acc;
    }

    if (predicate(item) === true) {
      return item;
    }
    return undefined;
  }, undefined);
};

const predicate = (val) => val === 4;

const res = find(predicate, [1, 3, 6]);

console.log(res);
