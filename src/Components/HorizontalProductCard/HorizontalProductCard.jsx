import axios from "axios";
import { useAuth } from "../../Contexts/auth-context";
import { useData } from "../../Contexts/DataContext";
import "./HorizontalProductCard.css";

const HorizontalProductCard = ({ product }) => {
  const {
    _id,
    title,
    discription,
    price,
    categoryName,
    img,
    rating,
    inWishList,
    inCart,
    qty,
  } = product;
  const { dispatch } = useData();
  const { token } = useAuth();

  const deleteCartHandler = async () => {
    try {
      const res = await axios.delete(`/api/user/cart/${_id}`, {
        headers: {
          authorization: token,
        },
      });

      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: "CART",
          payload: { cartItems: res.data.cart },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const productQuantityHandler = async (type) => {
    try {
      if (type === "decrement") {
        if (qty === 1) {
          deleteCartHandler();
        }
      }

      const res = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: { type },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: "CART",
          payload: { cartItems: res.data.cart },
        });
        console.log("success", qty);
        console.log(type);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="horizontal-card-component">
        <div className="card-skeleton horizontal-card border-black ">
          <div className="horizontal-image-container position-relative horizontal-image-container-cart">
            <img className="image-horizontal" src={img} alt="product-icon" />
            <i className="far fa-heart heart-icon heart-horizontal"></i>
          </div>

          <div className="horizontal-card-content">
            <h3>{title}</h3>
            <h4>{price}</h4>
            <p>50% off</p>
            <div className="quantity">
              <p>quantity:</p>
              <button
                className="quantity-button"
                onClick={() => productQuantityHandler("increment")}
              >
                +
              </button>
              <p>{qty}</p>
              <button
                className="quantity-button"
                onClick={() => productQuantityHandler("decrement")}
              >
                -
              </button>
            </div>

            <button
              className="horizontal-card-buttons button-cart"
              onClick={() => deleteCartHandler()}
            >
              {" "}
              Remove from cart{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { HorizontalProductCard };
