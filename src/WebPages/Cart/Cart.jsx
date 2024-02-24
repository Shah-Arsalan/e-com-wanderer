import { HorizontalProductCard } from "../../Components/HorizontalProductCard/HorizontalProductCard";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useData } from "../../Contexts/DataContext";
import "./Cart.css";
const Cart = () => {
  const { state } = useData();
  const CartData = state.productdata.filter((ele) => ele.inCart === true);

  const priceOfItems = CartData.reduce(
    (prev, curr) => prev + Number(curr.price) * Number(curr.qty),
    0
  );

  const discountPrice = 500;
  const deliveryPrice = 299;
  return (
    <>
      {CartData.length ? (
        <>
          <div class="cart-heading">
            <h1 class="small-heading-text flex-justify-center margin-1rem">
              My cart({state.cart.length})
            </h1>
          </div>

          <div class="cart-container margin-1rem">
            <div className="cart-cards">
              {CartData.map((ele) => {
                return <HorizontalProductCard key={ele._id} product={ele} />;
              })}
            </div>

            <div class="price-card">
              <div class="card-heading">
                <h2>Price Details</h2>
              </div>

              <div class="price-calculation">
                <div class="price-components display-flex">
                  <p>Price({CartData.length})</p>
                  <p>₹ {priceOfItems}</p>
                </div>
                <div class="price-components display-flex">
                  <p>Discount</p>
                  <p>-{discountPrice}</p>
                </div>
                <div class="price-components display-flex">
                  <p>Delivery</p>
                  <p>+ ₹{deliveryPrice}</p>
                </div>
              </div>

              <div class="total-amount display-flex">
                <h3>Toatal Amount</h3>
                <p> ₹ {priceOfItems - discountPrice + deliveryPrice}</p>
              </div>

              <p>you will save ₹ 500 in this order</p>

              <button class="primary-button">Place order</button>
            </div>
          </div>
        </>
      ) : (
        <h1 className="flex-justify-center spacing-m">Your Cart is empty...</h1>
      )}
    </>
  );
};

export { Cart };
// console.log()