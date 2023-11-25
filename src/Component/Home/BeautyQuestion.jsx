import React from "react";
import Slider from "react-slick";
import { beautyBrand } from "../../data.js";
import qna from "../../Asset/Image/qna.png";
import apple from "../../Asset/Image/apple.png";
import googel from "../../Asset/Image/google.png";
import { Link } from "react-router-dom";
const BeautyQuestion = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <section className="bg-pink-100 overflow-hidden">
        <div className="container mx-auto max-w-[1440px] px-7 lg:px-3">
          <Slider {...settings}>
            {beautyBrand.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={item.slux}>
                    <div className="flex justify-center mt-32 mb-52">
                      <img
                        src={item.image}
                        alt="Beauty Question"
                        className="max-w-full  bg-white min-w-[100px] sm:min-w-[165px] min-h-[65px] sm:px-10 px-2  mx-14 rounded-lg object-contain"
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      <div className="container mx-auto -mt-28">
        <img src={qna} alt="qna" className="max-w-fill h-auto" />
      </div>
      <section className="bg-pink-50 mt-2">
        <div className="container mx-auto py-20">
          <h1 className="font-bold text-4xl text-center">Download App now</h1>
          <div className="flex justify-center items-center mt-8">
            <img
              src={apple}
              alt="Download"
              className="mx-2 max-w-full h-12 min-h-[40px]"
            />
            <img
              src={googel}
              alt="Download"
              className="mx-2 max-w-full h-12 min-h-[40px]"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default BeautyQuestion;
