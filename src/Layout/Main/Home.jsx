import React from "react";
import HeaderSlickSlider from "../../Component/Home/HeaderSlickSlider";
import TopOffers from "../../Component/Home/TopOffers";
import MakeUp from "../../Component/Home/MakeUp";
import SkinCare from "../../Component/Home/SkinCare";
import Loreal from "../../Component/Home/Loreal";
import NewProduct from "../../Component/Home/NewProduct";
import FeatureBrand from "../../Component/Home/FeatureBrand";
import BeautyQuestion from "../../Component/Home/BeautyQuestion";

const Home = () => {
  return (
    <main>
      <HeaderSlickSlider />
      <TopOffers />
      <MakeUp />
      <SkinCare />
      <Loreal />
      <NewProduct />
      <FeatureBrand />
      <BeautyQuestion />
    </main>
  );
};

export default Home;
