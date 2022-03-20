import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/auth-context";

const Nav = () => {
  let navigate = useNavigate();
  const { token } = useAuth();
  return (
    <>
      <div className="nav-container white">
        <div>
          <img
            src="https://res.cloudinary.com/dg9tbhjxx/image/upload/v1647526187/Follow_the_sun._1_50_kk6phj.png"
            alt="logo-icon"
          />
        </div>

        <div className="icons display-flex">
          {!token && (
            <button class="primary-button" onClick={() => navigate("/login")}>
              LogIn
            </button>
          )}
          <div className="relative-button-container">
            <a href="/WebPages/cart/cart.html">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <p className="button-badge icon-badge">4</p>
          </div>
          <div className="relative-button-container">
            <a href="/WebPages/wishlist/wishlist.html">
              <i className="fas fa-heart"></i>
            </a>
            <p className="button-badge icon-badge">4</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Nav };
