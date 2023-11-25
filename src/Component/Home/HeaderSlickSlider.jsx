import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { headerSilkSlider } from "../../data.js";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import "../../Asset/Device.css";
function SampleNextArrow({ onClick }) {
  return (
    <div className="relative">
      <div
        className="arrwo arrow-right2  bg-white sm:w-16 sm:h-16 h-8 w-8 flex justify-center items-center rounded-full  -right-2  shadow-md absolute lg:bottom-36 bottom-[95px] sm:bottom-[95px] md:bottom-[75px]"
        onClick={onClick}
      >
        <BiChevronRight size={35} />
      </div>
    </div>
  );
}
function SamplePrevArrow({ onClick }) {
  return (
    <div className="relative">
      <div
        className="arrwo arrow-left2 bg-white sm:w-16 sm:h-16 h-8 w-8 flex justify-center items-center rounded-full -left-2 absolute z-10 shadow-md lg:top-[150px] top-[102px] sm:top-[102px] md:top-[90px]"
        onClick={onClick}
      >
        <BiChevronLeft size={35} />
      </div>
    </div>
  );
}
const HeaderSlickSlider = () => {
  var settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto max-w-[1440px] px-7 lg:py-3">
      <div>
        <Slider {...settings}>
          {headerSilkSlider.map((item) => {
            return (
              <div key={item.id}>
                <Link to={item.slux}>
                  <img
                    src={item.image1}
                    alt="Mishisa"
                    className="max-w-full px-1   rounded-lg min-h-[222px] sm:min-h-[222px] md:min-h-[224px]   lg:min-h-custom-min-height w-mobile-slide-image-width sm:-w-mobile-slide-image-width md:w-mobile-slide-image-width lg:w-custom-slide-image xl:w-custom-slide-image device_responive"
                  />
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HeaderSlickSlider;
