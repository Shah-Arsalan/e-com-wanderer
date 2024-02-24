import { useData } from "../../Contexts/DataContext";
import "./ProductListAside.css";

const ProductListAside = () => {
  const { state, dispatch } = useData();
  return (
    <>
      <div className="filter-and-category megaContainer">
        <div className="topContainer flex-space-between">
          <h3>Filters</h3>
          <p className="clearBtn" onClick={() => dispatch({ type: "CLEAR" })}>Clear</p>
        </div>

        <div className="input scroll-input display-flex">
          <h4>Price</h4>
          <div className="price-range display-flex">
            <p>1000</p>
            <p>5000</p>
            <p>12000</p>
          </div>

          <input
            type="range"
            id="range-input"
            min="1000"
            max="12000"
            value={state.filters.priceRange}
            onChange={(e) =>
              dispatch({
                type: "PRICE_RANGE",
                payload: { priceValue: e.target.value },
              })
            }
          />
        </div>

        <div className="checkboxlist-list spacing-s text-align-center">
          <div className="list-title">
            <p>Category</p>
          </div>
          <div className="checkbox-list-items">
            <div className="list-item">
              <input
                checked={state.filters.category.tent}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORY",
                    payload: {
                      checkValue: e.target.checked,
                      categoryType: "TENT",
                      categoryName: "tent",
                    },
                  })
                }
                id="item-1"
                type="checkbox"
                name="checkbox-input"
              />
              <label htmlFor="item-1">Tents</label>
            </div>
            <div className="list-item">
              <input
                checked={state.filters.category.sleepingBag}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORY",
                    payload: {
                      checkValue: e.target.checked,
                      categoryType: "SLEEPINGBAG",
                      categoryName: "sleepingBag",
                    },
                  })
                }
                id="item-2"
                type="checkbox"
                name="checkbox-input"
              />
              <label htmlFor="item-2">Sleeping Bags</label>
            </div>

            <div className="list-item">
              <input
                checked={state.filters.category.shoes}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORY",
                    payload: {
                      checkValue: e.target.checked,
                      categoryType: "SHOES",
                      categoryName: "shoes",
                    },
                  })
                }
                id="item-3"
                type="checkbox"
                name="checkbox-input"
              />
              <label htmlFor="item-3">Shoes</label>
            </div>
          </div>
        </div>

        <div className="radio-list radio-category spacing-s">
          <div className="list-title">
            <p>Rating</p>
          </div>

          <div className="radio-list-items">
            <div className="list-item">
              <input
                value="4"
                checked={state.filters.rating === "4"}
                onChange={(e) =>
                  dispatch({
                    type: "SORT_BY_RATING",
                    payload: { ratingValue: e.target.value },
                  })
                }
                id="item-5"
                type="radio"
                name="radio-input"
              />
              <label htmlFor="item-5">4 stars and above</label>
            </div>
            <div className="list-item">
              <input
                value="3"
                checked={state.filters.rating === "3"}
                onChange={(e) =>
                  dispatch({
                    type: "SORT_BY_RATING",
                    payload: { ratingValue: e.target.value },
                  })
                }
                id="item-6"
                type="radio"
                name="radio-input"
              />
              <label htmlFor="item-6">3 stars and above</label>
            </div>

            <div className="list-item">
              <input
                value="2"
                checked={state.filters.rating === "2"}
                onChange={(e) =>
                  dispatch({
                    type: "SORT_BY_RATING",
                    payload: { ratingValue: e.target.value },
                  })
                }
                id="item-7"
                type="radio"
                name="radio-input"
              />
              <label htmlFor="item-7">2 stars and above</label>
            </div>

            <div className="list-item">
              <input
                value="1"
                checked={state.filters.rating === "1"}
                onChange={(e) =>
                  dispatch({
                    type: "SORT_BY_RATING",
                    payload: { ratingValue: e.target.value },
                  })
                }
                id="item-8"
                type="radio"
                name="radio-input"
              />
              <label htmlFor="item-8"> 1 star and above</label>
            </div>
          </div>
        </div>

        <div className="radio-list radio-category spacing-s">
          <div className="list-title">
            <p>Sort By</p>
          </div>

          <div className="radio-list-items">
            <div className="list-item">
              <input
                checked={state.filters.sortBy === "LOW_TO_HIGH"}
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_PRICE",
                    payload: { sortValue: "LOW_TO_HIGH" },
                  })
                }
                id="item-9"
                type="radio"
                name="radio-input-2"
              />
              <label htmlFor="item-9">Price - Low to High</label>
            </div>
            <div className="list-item">
              <input
                checked={state.filters.sortBy === "HIGH_TO_LOW"}
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_PRICE",
                    payload: { sortValue: "HIGH_TO_LOW" },
                  })
                }
                id="item-10"
                type="radio"
                name="radio-input-2"
              />
              <label htmlFor="item-10">Price - High to Low</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductListAside };
