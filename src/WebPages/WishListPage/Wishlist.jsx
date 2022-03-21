import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useData } from "../../Contexts/DataContext";
import "./Wishlist.css";
const Wishlist = () => {
  const { state } = useData();
  console.log("inWishlist", state);
  const wishlistData = state.productdata.filter(
    (ele) => ele.inWishList === true
  );
  console.log("wishlistdata", wishlistData);
  return (
    <>
      <div className="wislist-title flex-justify-center spacing-s">
        <h1>
          {wishlistData.length === 0 ? "Wishlist is empty..." : "My Wishlist "}
        </h1>
      </div>

      <div className="wishlist-product-container">
        {wishlistData.map((ele) => {
          return <ProductCard product={ele} />;
        })}
      </div>
    </>
  );
};

export { Wishlist };
