import React from "react";
import Slider from "react-slick";
import { makeUp } from "../../data.js";
import { AiFillHeart } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
function SampleNextArrow({ onClick }) {
  return (
    <div className="relative">
      <div
        className="arrwo arrow-right  bg-white sm:w-16 sm:h-16 h-8 w-8 flex justify-center items-center rounded-full  -right-2  shadow-md absolute lg:bottom-44 bottom-[190px] sm:bottom-[190px] md:bottom-[175px]"
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
        className="arrwo arrow-left bg-white sm:w-16 sm:h-16 h-8 w-8 flex justify-center items-center rounded-full -left-2 absolute z-10 shadow-md lg:top-[165px] top-[190px] sm:top-[190px] md:top-[175px]"
        onClick={onClick}
      >
        <BiChevronLeft size={35} />
      </div>
    </div>
  );
}
const MakeUp = () => {
  var settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <section>
      <div className="container mx-auto max-w-[1440px] px-7 lg:py-3 mt-10">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">Make Up</h1>
          <div className="flex items-center">
            <p>View All </p>
            <MdArrowForwardIos className="font-thin" />
          </div>
        </div>
        <div className="mt-12">
          <Slider {...settings}>
            {makeUp.map((item) => {
              return (
                <div key={item.id} className="px-2">
                  <Link to={item.slux}>
                    <div className="border rounded-lg border-gray-400 flex flex-col  p-5 lg:min-h-[395px] min-h-[414px] sm:min-h-[414px] md:min-h-[414px] bg-white ">
                      <div className="flex justify-between items-center">
                        <span
                          className={
                            item.discount
                              ? "border border-gray-500 px-3 text-gray-500 font-normal rounded-2xl text-sm"
                              : ""
                          }
                        >
                          {item.discount}
                        </span>
                        <AiFillHeart className="text-gray-600" size={20} />
                      </div>
                      <div className="flex justify-center mt-5">
                        <img
                          src={item.image3}
                          alt="make_Up_Products"
                          className="max-w-full h-auto w-48  object-contain"
                        />
                      </div>
                      <div className="sm:mt-5 mt-3 ">
                        <p className="text-sm  text-gray-500">{item.title}</p>
                        <p className="text-gray-500 text-[16.8px] hover:text-vibrant hover:underline   font-medium  ">
                          {item.text}
                        </p>
                      </div>
                      <div className="flex mt-auto">
                        <p className="font-medium text-xl text-gray-700">
                          {item.price}
                        </p>
                        <del className="ml-2 text-red-500 text-xl font-bold">
                          {item.delPrice}
                        </del>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MakeUp;
