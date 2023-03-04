import React from "react";

const BestDeal = () => {
  return (
    <div>
        {/* --------------------- Nav-------------------------- */}
        <nav class="bg-gray-100">
    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a href="/" class="text-gray-800 transition-colors duration-300 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6 font-bold">Best Deal</a>
        <a href="/" class="border-b-2 text-black border-transparent hover:text-sky-600 font-semibold transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">Tv & Audios</a>
        <a href="/" class="border-b-2 text-black border-transparent hover:text-sky-600 font-semibold transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6">Cameras</a>
        <a href="/" class="border-b-2 text-black border-transparent hover:text-sky-600 font-semibold transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6">Audio</a>
        <a href="/" class="border-b-2 text-black border-transparent hover:text-sky-600 font-semibold transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6">SmartPhones</a>
        <a href="/" class="border-b-2 text-black border-transparent hover:text-sky-600 font-semibold transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6">GPS & Navi</a>
        <a href="/" class="border-b-2 text-black border-transparent hover:text-sky-600 font-semibold transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6">Computers</a>
        <a href="/" class="border-b-2 text-black border-transparent hover:text-sky-600 font-semibold transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6">Portable Audio</a>
        </div>
</nav>
        {/* ------------------------------------------------------------ */}
      <div className="container mx-auto grid gap-5 grid-cols-1 md:grid-cols-4 mt-5">
        <div class="">
          <div class="max-w-xs h-96 mx-auto overflow-hidden bg-gray-50 rounded-lg hover:border-2 border-sky-500">
            <div class="px-4 py-2">
              <p class="text-sm font-normal text-gray-800">Power Banks</p>
              <p class="text-sm font-bold text-gray-800">
                PowerBank 1130 mah Blue
              </p>
            </div>

            <img
              class="object-cover w-full h-52 mt-2"
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/powerbank-300x300.png"
              alt="NIKE AIR"
            />
            <p class="text-sm font-normal text-black mt-10 px-6 line-through">
              $ 210.00
            </p>
            <div class="flex items-center justify-between px-6 py-4 -mt-6">
              <p class="text-xl font-normal text-red-600">$ 200.00</p>
              <button
                type="button"
                className="px-3 py-3 font-semibold rounded-full bg-yellow-400 text-white"
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
          <div class="max-w-xs h-96 mx-auto overflow-hidden bg-gray-50 rounded-lg hover:border-2 border-sky-500">
            <div class="px-4 py-2">
              <p class="text-sm font-normal text-gray-800">Laptops</p>
              <p class="text-sm font-bold text-gray-800">
                Laptop Screener CX70-2QF 621 XPL <br />
                17.2" 4210
              </p>
            </div>

            <img
              class="object-cover w-full h-52 mt-2"
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/applap-300x300.png"
              alt="NIKE AIR"
            />

            <div class="flex items-center justify-between px-6 py-4 mt-5">
              <p class="text-xl font-normal text-black">$ 2,399.00</p>
              <button
                type="button"
                className="px-3 py-3 font-semibold rounded-full bg-yellow-400 text-white"
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
        <div class="w-full mx-auto hover:border-2 border-sky-500 h-full overflow-hidden bg-gray-50 rounded-lg col-span-2">
          <div class="px-6 py-5">
            <p class="text-sm font-normal text-gray-800">Game Console</p>
            <p class="text-sm font-bold text-gray-800">
              Game Console Controller + USB 3.0 Cable
            </p>
          </div>

          <img
            class="object-cover w-96 h-3/4 mx-auto mt-2"
            src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal.png"
            alt="NIKE AIR"
          />

          <div class="flex items-center justify-between px-4 py-2">
            <h1 class="text-2xl font-normal  text-black">$129</h1>
            <button
              type="button"
              class="text-white bg-yellow-500 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 text-center inline-flex items-center mr-2"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 mr-2 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              Add To Cart
            </button>
          </div>
        </div>
        <div class="">
        <div class="max-w-xs h-96 mx-auto overflow-hidden bg-gray-50 rounded-lg hover:border-2 border-sky-500">
            <div class="px-4 py-2">
              <p class="text-sm font-normal text-gray-800">Computer Cases</p>
              <p class="text-sm font-bold text-gray-800">
                Acrocool EN 52377 Dead Silence <br/>Gaming Cube Case
              </p>
            </div>

            <img
              class="object-cover w-full h-52 mt-2"
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/gamecabin-300x300.png"
              alt="NIKE AIR"
            />
            <p class="text-sm font-normal text-black mt-10 px-6 line-through">
              $ 180.00
            </p>
            <div class="flex items-center justify-between px-6 py-4 -mt-6">
              <p class="text-xl font-normal text-red-600">$ 150.00</p>
              <button
                type="button"
                className="px-3 py-3 font-semibold rounded-full bg-yellow-400 text-white"
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
          <div class="max-w-xs h-96 mx-auto overflow-hidden bg-gray-50 rounded-lg hover:border-2 border-sky-500">
            <div class="px-4 py-2">
              <p class="text-sm font-normal text-gray-800">Tvs</p>
              <p class="text-sm font-bold text-gray-800">
                WideScreen 4k SUHD Tv
              </p>
            </div>

            <img
              class="object-cover w-full h-52 mt-2"
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/widetv-300x300.png"
              alt="NIKE AIR"
            />

            <div class="flex items-center justify-between px-6 py-4 mt-5">
              <p class="text-xl font-normal text-black">$ 3,299.00</p>
              <button
                type="button"
                className="px-3 py-3 font-semibold rounded-full bg-yellow-400 text-white"
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
    </div>
  );
};

export default BestDeal;
