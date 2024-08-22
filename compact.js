const compact = (list) =>
  list.reduce((acc, item) => {
    if (item) {
      acc.push(item);
    }
    return acc;
  }, []);

const res = compact([NaN, 5, undefined, "Edward", {}]);
console.log(res);
