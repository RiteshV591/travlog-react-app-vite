import React from "react";
import Slider from "react-slick";
import { SingleCard } from "./SingleCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const destinations = [
  {
    id: 1,
    image: "../resources/destinations/destination1.jpg",
    destination: "Barcelona",
    location: "Catalonia, Spain",
    price: 380,
  },
  {
    id: 2,
    image: "../resources/destinations/destination2.jpg",
    destination: "Opera House",
    location: "Sydney, Austrailia",
    price: 300,
  },
  {
    id: 3,
    image: "../resources/destinations/destination3.jpg",
    destination: "Lion's Head",
    location: "Kapstadt, South Africa",
    price: 420,
  },
  {
    id: 4,
    image: "../resources/destinations/destination4.jpg",
    destination: "L'Arc de Triomphe",
    location: "Paris, France",
    price: 350,
  },
  {
    id: 5,
    image: "../resources/destinations/destination5.jpg",
    destination: "Sunset Temple",
    location: "Bali, Indonesia",
    price: 290,
  },
  {
    id: 6,
    image: "../resources/destinations/destination6.jpg",
    destination: "Trevi Fountain",
    location: "Roma, Italy",
    price: 490,
  },
];

export const Destination = () => {
  const settings = {
    dots: true,
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
          dots: true,
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
            {destinations.map((item, index) => (
              <SingleCard item={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
