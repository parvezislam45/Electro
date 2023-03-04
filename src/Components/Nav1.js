import React from "react";

const Nav1 = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-4xl font-bold text-black mx-16">
            electro
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </a>
            </li>

            <form>
              <div class="flex rounded">
                {/* <button
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-50 border-t-2 border-b-2 border-yellow-400 rounded-l-full hover:bg-gray-200"
                    type="button"
                  >
                    All categories{" "}
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button> */}
                <select
                  id="countries"
                  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-50 border-t-2 border-b-2 border-l-2 border-yellow-400 rounded-l-full"
                >
                  <option selected>All Categories</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
               
                <div class="relative">
                  <input
                    type="search"
                    id="search-dropdown"
                    class="block p-2.5 w-96 text-sm text-gray-900 rounded-r-full border-t-2 border-b-2 border-yellow-400"
                    placeholder="Search All Product"
                    
                  />
                  <button
                    type="submit"
                    class="absolute top-0 right-0 p-2.5 w-16 text-sm font-medium text-white bg-yellow-400 rounded-r-full border border-yellow-400 hover:bg-blue-800"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 mx-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>

            <li className="mx-16">
              <a>
                <img
                  src="https://static-00.iconduck.com/assets.00/compare-states-icon-256x256-d2kb9dqb.png"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
            </li>
            <li className="-mx-16">
              <a>
                <img
                  src="https://icons-for-free.com/iconfiles/png/256/heart+like+love+icon-1320196394606128344.png"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
            </li>
            <li className="mx-16">
              <a>
                <img
                  src="https://w7.pngwing.com/pngs/290/731/png-transparent-computer-icons-user-username-avatar-person-skill.png"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
            </li>
            <li className="">
              <a>
                <img
                  src="https://www.bankcheckingsavings.com/wp-content/uploads/2016/01/shopping-cart-trick.png"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="navbar-end"></div>
      </div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="flex mx-5 bg-yellow-400 h-12 w-52 justify-evenly items-center">
    <label tabIndex={0} className="">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <a className=" normal-case text-md font-bold">All Department</a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="text-md font-bold">Featured Brands</a></li>
      <li><a className="text-md font-bold">Trending Styles </a></li>
      <li><a className="text-md font-bold">Gift Cards</a></li>
    </ul>
  </div>
  <div className="navbar-end px-28">
  <h1 className="text-sm font-bold text-black">Free Shipping on Orders $50+</h1>
  </div>
</div>
    </div>
  );
};

export default Nav1;
