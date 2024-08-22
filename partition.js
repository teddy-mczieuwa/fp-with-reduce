const partition = (predicate, array) => {
  return array.reduce(
    (acc, item) => {
      const [list1, list2] = acc;
      if (predicate(item) === true) {
        list1.push(item);
      } else {
        list2.push(item);
      }
      return acc;
    },
    [[], []]
  );
};

const predicate = (val) => val % 2 === 0;

const res = partition(predicate, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.log(res);
