import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useFilter } from "../../useFilter/useFilter";

import "./tent.css"

const Tent = () => {
    const { filterredData } = useFilter();
    console.log(filterredData,"we are in tent");
    const TentArray = filterredData.filter(ele => ele.categoryName === "tent");
    console.log("here is tent array" , TentArray)
    
    return (
        <>
          <div className="wislist-title flex-justify-center spacing-s">
            <h1>
              {TentArray.length === 0 ? "NO tents available right now , sorry 😪" : " Tents "}
            </h1>
          </div>
    
          <div className="wishlist-product-container">
            {TentArray.map((ele) => {
              return <ProductCard product={ele} key={ele._id} />;
            })}
          </div>
        </>
      );
}

export {Tent};