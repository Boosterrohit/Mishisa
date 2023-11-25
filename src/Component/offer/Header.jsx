import React from "react";
import opb from "../../Asset/Image/offerpagebanner.jpg";
const Header = () => {
  return (
    <section>
      <div className="max-w-7xl m-auto px-7">
        <img src={opb} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default Header;
