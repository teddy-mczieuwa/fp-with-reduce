const deduplicate = (list) => {
  const cache = {};
  return list.reduce((acc, item) => {
    const alreadyCached = cache[item] === true;
    if (!alreadyCached) {
      cache[item] = true;
      acc.push(item);
    }
    return acc;
  }, []);
};

const res = deduplicate([4, "hello", 6, "hello"]);
console.log(res);
