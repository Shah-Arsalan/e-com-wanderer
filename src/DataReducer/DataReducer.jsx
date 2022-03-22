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
  wishlist: [],
  cart: [],
};

const DataReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "INITIAL_DATA_FETCH": {
      return {
        ...state,
        productdata: [...action.payload.products].map((ele) => ({
          ...ele,
          inWishList: false,
          inCart: false,
          qty: 0,
        })),
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
      return {
        ...state,
        filters: { ...state.filters, rating: action.payload.ratingValue },
      };
    }

    case "SORT_BY_PRICE": {
      return {
        ...state,
        filters: { ...state.filters, sortBy: action.payload.sortValue },
      };
    }

    case "PRICE_RANGE": {
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

    case "WISHLIST": {
      return {
        ...state,
        wishlist: [...action.payload.wishlistItems],
        productdata: state.productdata.map((ele) => ({
          ...ele,
          inWishList: action.payload.wishlistItems.some(
            (item) => item._id === ele._id
          ),
        })),
      };
    }

    case "CART": {
      return {
        ...state,
        cart: [...action.payload.cartItems],
        productdata: state.productdata.map((ele) => {
          const presentInCart = action.payload.cartItems.find(
            (item) => item._id === ele._id
          );
          return {
            ...ele,
            inCart: presentInCart ? true : false,
            qty: presentInCart ? presentInCart.qty : 0,
          };
        }),
      };
    }

    default:
      return state;
  }
};

export { DataReducer, initialState };
