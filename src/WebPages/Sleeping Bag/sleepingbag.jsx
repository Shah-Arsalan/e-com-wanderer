import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useFilter } from "../../useFilter/useFilter";

import "./sleepingbag.css"

const SleepingBag = () => {
    const { filterredData } = useFilter();
    console.log(filterredData,"we are in sleeepingbag");
    const sleepingBagArray = filterredData.filter(ele => ele.categoryName === "sleepingBag");
    console.log("here is tent array" , sleepingBagArray)
    
    return (
        <>
          <div className="wislist-title flex-justify-center spacing-s">
            <h1>
              {sleepingBagArray.length === 0 ? "NO Sleeping bags available right now , sorry 😪" : " Sleeping Bags "}
            </h1>
          </div>
    
          <div className="wishlist-product-container">
            {sleepingBagArray.map((ele) => {
              return <ProductCard product={ele} key={ele._id} />;
            })}
          </div>
        </>
      );
}

export {SleepingBag};