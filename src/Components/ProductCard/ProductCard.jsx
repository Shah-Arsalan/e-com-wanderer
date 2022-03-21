import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/auth-context";
import { useData } from "../../Contexts/DataContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const {
    _id,
    title,
    discription,
    price,
    categoryName,
    img,
    rating,
    inWishList,
  } = product;

  const wishListHandler = async () => {
    try {
      if (!token) {
        navigate("/login");
        return;
      }

      if (inWishList) {
        const res = await axios.delete(`/api/user/wishlist/${_id}`, {
          headers: {
            authorization: token,
          },
        });

        if (res.status === 200 || res.status === 201) {
          dispatch({
            type: "WISHLIST",
            payload: { wishlistItems: res.data.wishlist },
          });
        }
      } else {
        const res = await axios.post(
          "/api/user/wishlist",
          { product },
          {
            headers: {
              authorization: token,
            },
          }
        );

        if (res.status === 200 || res.status === 201) {
          dispatch({
            type: "WISHLIST",
            payload: { wishlistItems: res.data.wishlist },
          });
        }
      }
    } catch (error) {
      console.log("The error is : ", error);
    }
  };

  return (
    <>
      <div className="vertical-card-component">
        <div className="card-skeleton">
          <div className="imageContainer position-relative">
            <img className="image" src={img} alt="product-icon" />

            <i
              className={`fas fa-heart heart-icon ${
                !inWishList && "fav-icon "
              }`}
              onClick={() => wishListHandler()}
            ></i>
          </div>

          <div className="content">
            <h3 className="card-content">{title}</h3>
            <h5>{price}</h5>
            <p>{discription}</p>
            <p>Rated {rating} ⭐</p>
          </div>

          <div className="footer-button">
            <button className="card-button">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductCard };
