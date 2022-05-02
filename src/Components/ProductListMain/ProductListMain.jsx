import { useFilter } from "../../useFilter/useFilter";
import { ProductCard } from "../ProductCard/ProductCard";

import "./ProductListMain.css";

const ProductListMain = () => {
  const { filterredData } = useFilter();

  return (
    <>
      {filterredData.map((ele) => {
        return <ProductCard key={ele._id} product={ele} />;
      })}
    </>
  );
};

export { ProductListMain };
