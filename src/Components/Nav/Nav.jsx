import "./Nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-container white">
        <div>
          <a href="">
            <img
              src="https://res.cloudinary.com/dg9tbhjxx/image/upload/v1647526187/Follow_the_sun._1_50_kk6phj.png"
              alt="logo-icon"
            />
          </a>
        </div>

        <div className="icons display-flex">
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
