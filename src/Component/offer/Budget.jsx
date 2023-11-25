import React from "react";
import { fivePerOff2 } from "../../data";
const TopOffers = () => {
  return (
    <div className="">
      <h1 className="font-bold text-4xl py-5 mt-5 mb-4 text-[#061221]">
        In your budget
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {fivePerOff2.map((item) => {
          return (
            <div key={item.id}>
              <div className=" col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-4">
                <img
                  src={item.image2}
                  alt="TopOffer"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopOffers;
