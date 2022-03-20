import "./ProductCard.css";

const ProductCard = ({
  ele: { _id, title, discription, price, categoryName, img, rating },
}) => {
  return (
    <>
      <div className="vertical-card-component">
        <div className="card-skeleton">
          <div className="imageContainer position-relative">
            <img className="image" src={img} alt="product-icon" />

            <i className="fas fa-heart heart-icon"></i>
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
