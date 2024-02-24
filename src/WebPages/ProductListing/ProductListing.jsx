import { ProductListAside } from "../../Components/ProductListAside/ProductListAside";
import { ProductListMain } from "../../Components/ProductListMain/ProductListMain";

const ProductListing = () => {
  return (
    <>
      <div className="product-listing-body">
        <div class="filter-and-category megaContainer">
          <ProductListAside />
        </div>
        <div className="product-container">
          <ProductListMain />
        </div>
      </div>
    </>
  );
};
export { ProductListing };
