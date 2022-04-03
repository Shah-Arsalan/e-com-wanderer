import "./Nav.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/auth-context";
import { useData } from "../../Contexts/DataContext";

const Nav = () => {
  let navigate = useNavigate();
  const { token, logoutHandler } = useAuth();
  const { state } = useData();
  const location = useLocation();
  if (location.pathname === "/404") {
    return null;
  }

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
          {token && (
            <button
              class="primary-button"
              onClick={() => {
                logoutHandler();
                navigate("/");
              }}
            >
              Log Out
            </button>
          )}
          <div className="relative-button-container">
            <i
              onClick={() => navigate("/cart")}
              className="fas fa-shopping-cart"
            ></i>

            {token && state.cart.length > 0 && (
              <p className="button-badge icon-badge">{state.cart.length}</p>
            )}
          </div>
          <div className="relative-button-container">
            <i
              onClick={() => navigate("/wishlist")}
              className="fas fa-heart"
            ></i>

            {token && state.wishlist.length > 0 && (
              <p className="button-badge icon-badge">{state.wishlist.length}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { Nav };
