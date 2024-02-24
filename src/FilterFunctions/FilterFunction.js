const union = (...arr) => {
  const uni = arr.reduce((acc, curr) => {
    return acc.concat(
      curr.filter((el) => !acc.some((ele) => ele.id === el.id))
    );
  }, []);

  return uni;
};

const sortByPrice = (state, data) => {
  if (state.filters.sortBy === "HIGH_TO_LOW") {
    return [...data].sort((a, b) => b.price - a.price);
  }

  if (state.filters.sortBy === "LOW_TO_HIGH") {
    return [...data].sort((a, b) => a.price - b.price);
  }

  return [...data];
};

const sortByRating = (state, data) => {
  if (state.filters.rating) {
    return [...data.filter((item) => item.rating >= state.filters.rating)];
  }
  return [...data];
};

const sortByCategory = (state, data) => {
  let newData = [];
  let flag = false;
  if (state.filters.category.tent === true) {
    flag = true;
    newData = union(
      newData,
      [...data].filter((ele) => ele.categoryName === "tent")
    );
  }

  if (state.filters.category.sleepingBag === true) {
    flag = true;
    newData = union(
      newData,
      [...data].filter((ele) => ele.categoryName === "sleepingBag")
    );
  }

  if (state.filters.category.shoes === true) {
    flag = true;
    newData = union(
      newData,
      [...data].filter((ele) => ele.categoryName === "shoes")
    );
  }

  if (flag) {
    return newData;
  }

  return [...data];
};

const sortByRange = (state, data) => {
  return [...data].filter(
    (ele) => Number(ele.price) <= state.filters.priceRange
  );
};

export { union, sortByPrice, sortByRating, sortByCategory, sortByRange };
