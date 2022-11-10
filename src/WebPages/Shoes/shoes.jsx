import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useFilter } from "../../useFilter/useFilter";

import "./shoes.css"

const Shoes = () => {
    const { filterredData } = useFilter();
    console.log(filterredData,"we are in shoes page");
    const shoesArray = filterredData.filter(ele => ele.categoryName === "shoes");
    console.log("here is shoesarray" , shoesArray)
    
    return (
        <>
          <div className="wislist-title flex-justify-center spacing-s">
            <h1>
              {shoesArray.length === 0 ? "No shoes available right now , sorry 😪" : " Shoes "}
            </h1>
          </div>
    
          <div className="wishlist-product-container">
            {shoesArray.map((ele) => {
              return <ProductCard product={ele} key={ele._id} />;
            })}
          </div>
        </>
      );
}

export {Shoes};