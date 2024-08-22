const adjust = (list, fn, adjustIndex) => {
  return list.reduce((acc, item, index) => {
    const value = index === adjustIndex ? fn(item) : item;
    acc.push(value);
    return acc;
  }, []);
};

const double = (val) => val * 2;

const res = adjust([2, 4, 3], double, 2);

console.log(res);
