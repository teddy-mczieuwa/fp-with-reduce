const zip = (list1, list2) => {
  const sourceList = list1.length > list2.length ? list2 : list1;

  return sourceList.reduce((acc, _, index) => {
    const value1 = list1[index];
    const value2 = list2[index];
    acc.push([value1, value2]);
    return acc;
  }, []);
};

const res = zip([4, 5, 6], [1, 2, 3]);

console.log(res);
