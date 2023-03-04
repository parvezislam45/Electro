import React from "react";

const NewsShelter = () => {
  return (
    <div>
      {/* <nav class="bg-yellow-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" class="flex items-center px-20">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <h1 class="self-center text-xl font-normal whitespace-nowrap dark:text-white">
              Sign up to Newsletter
            </h1>
          </a>
          <ul class="">
            <li>
              <a
                href="/"
                class="block py-10 pl-10 pr-10 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white text-md"
                aria-current="page"
              >
                ...and receive $20 coupon for first shopping
              </a>
            </li>
          </ul>
          <div class="flex md:order-2">
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav> */}
      <div className="navbar bg-yellow-400 px-20">
        <div className="flex-1">
          <a
            href="https://flowbite.com/"
            class="flex items-center justify-between"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/18/18612.png"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <h1 class="self-center text-xl font-normal whitespace-nowrap text-black">
              Sign up to Newsletter
            </h1>
          </a>
          <h1 className="mx-20">
            ...and receive<span className="font-bold"> $20 coupon for first shopping</span>
          </h1>
        </div>
        <div className="flex-none">
          <div className="form-control">
            <div class="relative w-96">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-full border-l-gray-50 border-l-2 border focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Your Email Address"

              />
              <button
                type="submit"
                class="absolute rounded-full top-0 right-0 p-2.5 w-24 text-sm font-medium text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <h1 className="text-md font-semibold">SignUp</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsShelter;
