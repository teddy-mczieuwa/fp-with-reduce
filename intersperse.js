const intersperse = (separator, array) =>
  array.reduce((acc, item, index) => {
    if (index === array.length - 1) {
      acc.push(item);
    } else {
      acc.push(item, separator);
    }

    return acc;
  }, []);

const res = intersperse("-", [4, 2, 7, 0]);

console.log(res);
