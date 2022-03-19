const initialState = {
  filters: {
    sortBy: "",
    category: {
      tent: false,
      sleepingBag: false,
      shoes: false,
    },
    rating: 0,
    priceRange: 12000,
  },
  productdata: [],
};

const DataReducer = (state, action) => {
  console.log("action", action);
  const { payload } = action;
  switch (action.type) {
    case "INITIAL_DATA_FETCH": {
      console.log("pay", action.payload);
      return {
        ...state,
        productdata: state.productdata.concat(action.payload.products),
      };
    }

    case "CATEGORY": {
      const newCategory = { ...state.filters.category };
      newCategory[payload.categoryName] = payload.checkValue;
      return {
        ...state,
        filters: { ...state.filters, category: { ...newCategory } },
      };
    }

    case "SORT_BY_RATING": {
      console.log(action.payload.ratingValue);
      return {
        ...state,
        filters: { ...state.filters, rating: action.payload.ratingValue },
      };
    }

    case "SORT_BY_PRICE": {
      console.log(action.payload.sortValue);
      return {
        ...state,
        filters: { ...state.filters, sortBy: action.payload.sortValue },
      };
    }

    case "PRICE_RANGE": {
      console.log(action.payload.priceValue);
      return {
        ...state,
        filters: { ...state.filters, priceRange: action.payload.priceValue },
      };
    }

    case "CLEAR": {
      return {
        ...state,
        filters: {
          sortBy: "",
          category: {
            tent: false,
            sleepingBag: false,
            shoes: false,
          },
          rating: 0,
          priceRange: 12000,
        },
      };
    }

    default:
      return state;
  }
};

export { DataReducer, initialState };
