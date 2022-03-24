import "./LandingPage.css";
import { useNavigate } from "react-router";

const LandingPage = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="home-hero-img-container">
        <img
          className="img-responsive home-hero-img"
          src="https://images.unsplash.com/photo-1600799964235-c827e39f004a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1910&q=80"
          alt="home-image"
        />
      </div>

      <div className="horizontal-card-component spacing-m">
        <div className="card-skeleton  border-black horizontal-card-landing-page">
          <h1>Tents</h1>
          <div className="horizontal-image-container position-relative">
            <img
              className="image-horizontal"
              src="https://images.unsplash.com/photo-1633805159007-8e198bbcc931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="card-skeleton  border-black horizontal-card-landing-page">
          <h1>Sleeping Bags</h1>
          <div className="horizontal-image-container position-relative">
            <img
              className="image-horizontal"
              src="https://images.unsplash.com/photo-1518388389348-b60e09ab7627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="card-skeleton  border-black horizontal-card-landing-page">
          <h1>Shoes</h1>
          <div className="horizontal-image-container position-relative">
            <img
              className="image-horizontal"
              src="https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Hiking%20boots%20%28stepping%20in%20deep%20mud%20with%20Salomon%20Quest%204%29.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="shop-button display-flex margin-1rem">
        <button
          onClick={() => navigate("/productlist")}
          className="primary-button shop-now"
        >
          Explore Products
        </button>
      </div>
    </>
  );
};

export { LandingPage };
