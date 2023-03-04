import React from "react";

const BestSeller = () => {
  return (
    <div>
      {/* --------------------------- Nav --------------------------- */}
      
      
<nav class="bg-gray-100 px-2 sm:px-4 py-2.5 rounded mt-10">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <span class="self-center text-2xl font-normal whitespace-nowrap text-black mx-20">Best Sellers</span>
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0">
        <li>
          <a href="/" ><p className="border-2 border-yellow-500 rounded-full px-5 text-md">Top 20</p></a>
        </li>
        <li>
          <a href="/" class="block py-2 pl-3 pr-4 text-black font-normal rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">SmartPhones & Tablets</a>
        </li>
        <li>
          <a href="/" class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Laptops & Computers</a>
        </li>
        <li>
          <a href="/" class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Videos & Cameras</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      {/* ----------------------------------------------------------------- */}
      <div className="container px-7 mx-auto grid gap-5 grid-cols-1 md:grid-cols-3 mt-4">
        <div className="card lg:card-side bg-gray-50">
          <figure>
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png"
              alt="Album"
              className="w-36"
            />
          </figure>
          <div className="card-body">
            <p className="text-xs font-normal">Game Console</p>
            <h2 className="text-sm font-bold">
              Game Console Controller <br />+ USB 3.0 Cable
            </h2>
            <div className="flex items-start justify-between mt-5">
              <h2 className="text-lg font-normal">$ 440.00</h2>
              <button
                type="button"
                className="px-2 py-2 font-semibold rounded-full bg-yellow-400 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-arrow-right h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />{" "}
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-gray-50">
          <figure>
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/WirelessSound-300x300.png"
              alt="Album"
              className="w-36"
            />
          </figure>
          <div className="card-body">
            <p className="text-xs font-normal">Audio Speakers</p>
            <h2 className="text-sm font-bold">
              Wireless Audio System
              <br />
              MultiRoom 360
            </h2>
            <div className="flex items-start justify-between mt-5">
              <h2 className="text-lg font-normal">$ 2,299.00</h2>
              <button
                type="button"
                className="px-2 py-2 font-semibold rounded-full bg-yellow-400 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-arrow-right h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />{" "}
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-gray-50">
          <figure>
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png"
              alt="Album"
              className="w-36"
            />
          </figure>
          <div className="card-body">
            <p className="text-sm font-normal">Laptops, UltraBooks</p>
            <h2 className="text-sm font-bold">
              Tablet Red EliteBook <br />
              Revolve 830 G3
            </h2>
            <div className="flex items-start justify-between mt-5">
              <h2 className="text-lg font-normal">$ 440.00</h2>
              <button
                type="button"
                className="px-2 py-2 font-semibold rounded-full bg-yellow-400 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-arrow-right h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />{" "}
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-gray-50">
          <figure>
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png"
              alt="Album"
              className="w-36"
            />
          </figure>
          <div className="card-body">
            <p className="text-xs font-normal">HeadPhones</p>
            <h2 className="text-sm font-bold">
              Ultra Wireless S50 <br />
              HeadPhones with S50
            </h2>
            <div className="flex items-start justify-between mt-5">
              <h2 className="text-lg font-normal">$ 350.00</h2>
              <button
                type="button"
                className="px-2 py-2 font-semibold rounded-full bg-yellow-400 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-arrow-right h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />{" "}
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-gray-50">
          <figure>
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/redPhone-300x300.png"
              alt="Album"
              className="w-36"
            />
          </figure>
          <div className="card-body">
            <p className="text-sm font-normal">SmartPhones</p>
            <h2 className="text-sm font-bold">
              Iphone 14 Pro Max <br />
              SmartPhones
            </h2>
            <div className="flex items-start justify-between mt-5">
              <h2 className="text-lg font-normal">$ 1,300.00</h2>
              <button
                type="button"
                className="px-2 py-2 font-semibold rounded-full bg-yellow-400 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-arrow-right h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />{" "}
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-gray-50">
          <figure>
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/uniheadphone-300x300.png"
              alt="Album"
              className="w-36"
            />
          </figure>
          <div className="card-body">
            <p className="text-xs font-normal">HeadPhones</p>
            <h2 className="text-sm font-bold">
              White Solo 2 Wireless <br />
              Cool Dude
            </h2>
            <div className="flex items-start justify-between mt-5">
              <h2 className="text-lg font-normal">$ 248.99</h2>
              <button
                type="button"
                className="px-2 py-2 font-semibold rounded-full bg-yellow-400 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-arrow-right h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />{" "}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <img src="https://electro.madrasthemes.com/wp-content/uploads/2018/04/home-v5-banner.png" alt=""className="w-full h-full mt-5" />
    </div>
  );
};

export default BestSeller;
