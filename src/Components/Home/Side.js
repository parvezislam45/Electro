import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Side = () => {
  return (
    <div className="mt-5">
      <div className="drawer drawer-mobile h-96">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  class="w-full bg-center bg-cover h-[35rem]"
                  style={{
                    backgroundImage:
                      "url(https://bgr.com/wp-content/uploads/2022/03/iphone-14-pro-3d-renders-2.jpg?quality=82&strip=all&w=1440&h=810&crop=1)",
                  }}
                >
                  <div class="flex items-center justify-center w-full h-full bg-gray-900/10">
                    <div class="text-center">
                      <h1 class="text-3xl font-semibold text-white lg:text-4xl">
                        Build your new <span class="text-blue-400">Saas</span>{" "}
                        Project
                      </h1>
                      <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Start project
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                  class="w-full bg-center bg-cover h-[25rem]"
                  style={{
                    backgroundImage:
                      "url(https://s.isanook.com/hi/0/rp/r/w850/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzEwLzE1NTEwMTcvMTU1MTAxNy10aHVtYm5haWwuanBn.jpg)",
                  }}
                >
                  <div class="flex items-center justify-center w-full h-full bg-gray-900/10">
                    <div class="text-center">
                      <h1 class="text-3xl font-semibold text-white lg:text-4xl">
                        Build your new <span class="text-blue-400">Saas</span>{" "}
                        Project
                      </h1>
                      <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Start project
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                  class="w-full bg-center bg-cover h-[28rem]"
                  style={{
                    backgroundImage:
                      "url(https://ipt.imgix.net/206856/x/0/what-isa-dslr-camera-adam-welch-iceland-photo-tours-1.jpg?ar=1.91%3A1&w=1200&fit=crop)",
                  }}
                >
                  <div class="flex items-center justify-center w-full h-full bg-gray-900/10">
                    <div class="text-center">
                      <h1 class="text-3xl font-semibold text-white lg:text-4xl">
                        Build your new <span class="text-blue-400">Saas</span>{" "}
                        Project
                      </h1>
                      <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Start project
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                  class="w-full bg-center bg-cover h-[28rem]"
                  style={{
                    backgroundImage:
                      "url(https://www.cnet.com/a/img/resize/d73e11d794c227395d6296372d3f2990f34277be/hub/2022/10/31/662e25fa-2914-4983-948e-4fd09bc374c7/hisense-u8h-2022-google-tv-6449.jpg?auto=webp&fit=crop&height=528&width=940)",
                  }}
                >
                  <div class="flex items-center justify-center w-full h-full bg-gray-900/10">
                    <div class="text-center">
                      <h1 class="text-3xl font-semibold text-white lg:text-4xl">
                        Build your new <span class="text-blue-400">Saas</span>{" "}
                        Project
                      </h1>
                      <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Start project
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <aside class="flex flex-col w-64 h-96 px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
            <div class="flex flex-col justify-between flex-1 mt-6">
              <div className="px-2">
                <div class="-mt-20">
                  <h2 class="text-sm font-bold text-gray-800 mt-5">
                    Value of The Day
                  </h2>
                  <hr class="my-1 border-gray-300 sm:mx-auto" />
                  <h2 class="text-sm font-bold text-gray-800">Top 100 Offer</h2>
                  <hr class="my-1 border-gray-300 sm:mx-auto" />
                  <h2 class="text-sm font-bold text-gray-800">New Arrival</h2>
                  <hr class="my-1 border-gray-300 sm:mx-auto" />
                </div>
                <div class="flex items-center justify-between hover:bg-gray-100">
                  <a href="/">
                    <h2 class="text-sm font-semibold text-gray-800 hover:font-bold">
                      Computer & Accessories
                    </h2>
                  </a>
                  <button class="p-0.2 hover:bg-gray-100 duration-200 transition-colors text-gray-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <hr class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div class="flex items-center justify-between hover:bg-gray-100">
                  <a href="/">
                    <h2 class="text-sm font-semibold text-gray-800 hover:font-bold">
                      Cameras,Audio & Videos
                    </h2>
                  </a>
                  <button class="p-0.2 hover:bg-gray-100 duration-200 transition-colors text-gray-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <hr class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div class="flex items-center justify-between hover:bg-gray-100">
                  <a href="/">
                    <h2 class="text-sm font-semibold text-gray-800 hover:font-bold">
                      Mobile & Tablets
                    </h2>
                  </a>
                  <button class="p-0.2 hover:bg-gray-100 duration-200 transition-colors text-gray-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <hr class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div class="flex items-center justify-between hover:bg-gray-100">
                  <a href="/">
                    <h2 class="text-sm font-semibold text-gray-800 hover:font-bold">
                      Movies,Music & Video Games
                    </h2>
                  </a>
                  <button class="p-0.2 hover:bg-gray-100 duration-200 transition-colors text-gray-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <hr class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div class="flex items-center justify-between ">
                  <a href="/">
                    <h2 class="text-sm font-semibold text-gray-800 hover:font-bold">
                      Tv & Audio
                    </h2>
                  </a>
                  <button class="p-0.2 hover:bg-gray-100 duration-200 transition-colors text-gray-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <hr class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div class="flex items-center justify-between hover:bg-gray-100">
                  <a href="/">
                    <h2 class="text-sm font-semibold text-gray-800 hover:font-bold">
                      Watchs & Eyewere
                    </h2>
                  </a>
                  <button class="p-0.2 hover:bg-gray-100 duration-200 transition-colors text-gray-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <hr class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div class="flex items-center justify-between hover:bg-gray-100">
                  <a href="/">
                    <h2 class="text-sm font-semibold text-gray-800 hover:font-bold">
                      Cars,MotorBikes & Industrial
                    </h2>
                  </a>
                  <button class="p-0.2 hover:bg-gray-100 duration-200 transition-colors text-gray-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <hr class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div class="flex items-center justify-between hover:bg-gray-100">
                  <a href="/">
                    <h2 class="text-sm font-semibold text-gray-800 hover:font-bold">
                      Accessories
                    </h2>
                  </a>
                  <button class="p-0.2 hover:bg-gray-100 duration-200 transition-colors text-gray-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Side;
