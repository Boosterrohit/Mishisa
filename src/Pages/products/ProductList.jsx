import React from "react";
import product from "../../Asset/Image/prodcut list.png";
import Filter from "../products/Filter";
const ProductList = () => {
  return (
    <section className="bg-[#FFF3F2]">
      <div className="max-w-7xl px-6 sm:pt-16 pt-0 m-auto ">
        <img
          src={product}
          className="w-full sm:h-auto h-72 object-none sm:object-contain "
          alt=""
        />
        <Filter />
      </div>
    </section>
  );
};

export default ProductList;
