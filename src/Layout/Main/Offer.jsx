import React from "react";
import Header from "../../Component/offer/Header";
import TopOffers from "../../Component/offer/TopOffer";
import Budget from "../../Component/offer/Budget";
import ExplorOffer from "../../Component/offer/ExplorOffer";
import Products from "../../Component/offer/Products";
const Offer = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1440px] px-7 lg:py-3">
        <Header />
        <TopOffers />
        <Budget />
        <ExplorOffer />
        <Products />
      </div>
    </section>
  );
};

export default Offer;
