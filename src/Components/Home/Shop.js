import React from "react";

const Shop = () => {
  return (
    <div>
      <section class="mt-5">
        <div class="container mx-auto px-4 bg-white">
          <div class="relative flex flex-col break-words w-full mb-6 rounded-lg">
            <div class="px-10">
              <div class="flex flex-wrap justify-center">
                <div class="w-full">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                      <div class="py-6">
                        <div class="flex max-w-md bg-gray-100 shadow-lg rounded-lg overflow-hidden justify-center items-center">
                          <div
                            class="w-1/2 h-28 bg-cover"
                            style={{
                              backgroundImage:
                                "url(https://electro.madrasthemes.com/wp-content/uploads/2021/03/cameras-resized.png)",
                            }}
                          ></div>
                          <div class="w-2/3 p-10">
                            <p className="font-normal text-black text-lg">
                              CATCH BIG
                            </p>
                            <p className="font-normal text-black text-lg -mt-2">
                              <span className="font-bold">DEALS</span> ON THE
                            </p>
                            <p className="font-normal text-black text-lg -mt-1">
                              CAMERAS
                            </p>
                            <button
                              type="button"
                              class="text-black font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
                            >
                              Shop Now
                              
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="bi bi-chevron-right w-5 h-4 ml-2 -mr-1"
                                viewBox="0 0 16 16"
                              >
                                {" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                />{" "}
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="py-6">
                        <div class="flex max-w-md bg-gray-100 shadow-lg rounded-lg overflow-hidden justify-center items-center">
                          <div
                            class="w-1/2 h-28 bg-cover"
                            style={{
                              backgroundImage:
                                "url(https://electro.madrasthemes.com/wp-content/uploads/2021/03/laptop.png)",
                            }}
                          ></div>
                          <div class="w-2/3 p-10">
                            <p className="font-normal text-black text-lg">
                              TABLET'S
                            </p>
                            <p className="font-normal text-black text-lg -mt-2">
                              SMARTPHONES
                            </p>
                            <p className="font-bold text-black text-lg -mt-2">
                              AND MORE
                            </p>
                            <a href="/">
                              <div className="flex items-center gap-3 mt-0">
                                <div>
                                  <p className="font-normal text-normal text-md">
                                    {" "}
                                    UP
                                  </p>
                                  <p className="font-normal text-normal text-md -mt-2">
                                    {" "}
                                    TO
                                  </p>
                                </div>
                                <div className="flex justify-evenly">
                                  <p className="font-bold text-black text-3xl">
                                    70%
                                  </p>
                                  <p className="font- text-black px-2 mt-1">
                                    more
                                  </p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="py-6">
                        <div class="flex max-w-md bg-gray-100 shadow-lg rounded-lg overflow-hidden justify-center items-center">
                          <div
                            class="w-1/2 h-28 bg-cover"
                            style={{
                              backgroundImage:
                                "url(https://electro.madrasthemes.com/wp-content/uploads/2021/03/desktop.png)",
                            }}
                          ></div>
                          <div class="w-2/3 p-10">
                            <p className="font-normal text-black text-lg">
                              SHOP THE
                            </p>
                            <p className="font-bold text-black text-lg -mt-2">
                              HOTTEST
                            </p>
                            <p className="font-normal text-black text-lg -mt-2">
                              PRODUCTS
                            </p>
                            <button
                              type="button"
                              class="text-black font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
                            >
                              Shop Now
                              
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="bi bi-chevron-right w-5 h-4 ml-2 -mr-1"
                                viewBox="0 0 16 16"
                              >
                                {" "}
                                <path
                                  fill-rule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                />{" "}
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
