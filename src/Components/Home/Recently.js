import React from "react";
import Slider from "react-slick";
import { Client } from "./Data";

const Recently = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="mx-10 mt-5">
        <h1 className="text-2xl font-semibold mx-28">Recently Added</h1>
        <hr className="border-2 border-yellow-400 mx-28 w-44 mt-2"/>
      <Slider {...settings}>
        {Client.map((item) => (
          <div className="mt-5">
          
              <div class="w-48 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
                <p className="text-xs font-normal">{item.text}</p>
                <h1 class="text-sm font-bold text-gray-700">{item.title}</h1>
                <h1 class="text-sm font-bold text-gray-700 -mt-1">
                  {item.title2}
                </h1>
                <img
                  class="w-64 object-cover rounded-t-md"
                  src={item.img}
                  alt=""
                />
                
                <div class="mt-4">
                <p className="mt-4 mx-4 text-xs line-through"> {item.price2}</p>
                  <div class=" mb-2 flex justify-between pl-4 pr-2">
                    <button class="block text-md font-normal text-gray-700 cursor-auto">
                      $ {item.price}

                    </button>
                    <button
                      type="button"
                      className="px-2 py-2 font-semibold rounded-full bg-yellow-400 text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="bi bi-cart3 w-3 h-3"
                        viewBox="0 0 16 16"
                        style={{color:"white"}}

                      >
                        {" "}
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Recently;
