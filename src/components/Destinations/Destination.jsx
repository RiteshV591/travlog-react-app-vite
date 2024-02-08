import React from "react";
import Slider from "react-slick";
import { SingleCard } from "./SingleCard";
import destinationsData from "./destinationsData.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Destination = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 200,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 200,
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <section id="destination-section">
      {/*  title part  */}
      <div className="container flex justify-center items-center text-center my-16 mx-auto lg:justify-between md:mx-auto">
        {/* Title and Tagline */}
        <div className="flex flex-col p-3 gap-3 text-center lg:text-left lg:ml-12 xl:p-6 2xl:ml-0">
          <h4 className="text-pink-400 text-lg font-semibold 2xl:text-xl">
            CHOOSE YOUR NEXT DESTINATION
          </h4>
          <h1 className="text-4xl font-semibold text-matt-black leading-snug 2xl:text-5xl">
            Explore top destination
          </h1>
        </div>
        {/* Arrow Buttons */}
        <div className="hidden lg:flex gap-4 lg:mr-12">
          <button
            id="slick-previous"
            onClick={() => slider?.current?.slickPrev()}
          >
            <span className="material-symbols-outlined bg-neutral-100 text-indigo-700 p-3 rounded-full drop-shadow-lg shadow-inner hover:bg-neutral-50 hover:drop-shadow-xl active:bg-neutral-200 active:drop-shadow-md">
              arrow_back_ios_new
            </span>
          </button>
          <button id="slick-next" onClick={() => slider?.current?.slickNext()}>
            <span className="material-symbols-outlined bg-indigo-700 text-white p-3 rounded-full drop-shadow-lg shadow-inner hover:bg-indigo-500 hover:drop-shadow-xl active:bg-indigo-800 active:drop-shadow-md">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div>

      {/* Destination card carousel */}
      <div className="container flex justify-center items-center mx-auto mb-20">
        {/* Cards Container */}

        <div className="destination-cards grid grid-cols-1 gap-8 lg:gap-12 lg:mx-auto">
          <Slider ref={slider} {...settings}>
            {destinationsData.map((item) => (
              <SingleCard item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
