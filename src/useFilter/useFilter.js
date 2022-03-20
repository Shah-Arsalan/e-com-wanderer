import { useData } from "../Contexts/DataContext";
import {
  sortByCategory,
  sortByRating,
  sortByRange,
  sortByPrice,
} from "../FilterFunctions/FilterFunction";

const useFilter = () => {
  const { state } = useData();
  const { productdata } = state;
  const categoryData = sortByCategory(state, productdata);
  const ratedData = sortByRating(state, categoryData);
  const rangedData = sortByRange(state, ratedData);
  const sortedData = sortByPrice(state, rangedData);
  return { filterredData: sortedData };
};

export { useFilter };
