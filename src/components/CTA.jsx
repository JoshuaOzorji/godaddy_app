import React from "react";
import { HiSearch } from "react-icons/hi";

const CTA = () => {
  return (
    <div className="w-full bg-[#D8EFEF] sm:h-full md:h-[24.5rem]">
      <div className="md:mx-[50px]">
        <div className="sm:hidden md:flex flex-col items-center md:py-24 ">
          <h1 className="font-dm md:text-5xl font-bold md:my-8">
            It all starts with a domain.
          </h1>
          <p className="mt-4">
            Make your idea real. Claim your space online with a domain.
          </p>
          <div class="flex flex-col justify-center">
            <div class="mt-3">
              <div class="relative flex flex-row   ">
                <input
                  type="search"
                  className="relative flex-auto md:w-[28rem] block h-[4rem] px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border mr-0 border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Find your perfect domain"
                  aria-label="Search"
                />

                <button
                  className="btn inline-block px-10 py-2  text-white font-medium text-base ml-0 hover:bg-[#00838C] bg-black border focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  type="button"
                  id="button-addon3"
                >
                  <div> Search</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SM BREAKPOINTS */}
      <div className="sm:mx-4 pb-6 mt-4">
        <div className="sm:flex md:hidden flex-col items-center">
          <h1 className="font-dm text-[34px] font-bold text-center leading-tight my-2 pt-6">
            It all starts with a domain.
          </h1>
          <p className="text-center">
            Make your idea real. Claim your space online with a domain.
          </p>
          <div class="w-full flex flex-col justify-center">
            <div class="mt-3">
              <div class="relative flex flex-row">
                <input
                  type="search"
                  className="relative flex-auto  block h-[3.2rem] px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  mr-0 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Find your perfect domain"
                  aria-label="Search"
                />

                <button
                  className="btn  px-8 py-2  text-white font-medium text-base ml-0 hover:bg-[#616161] bg-black border focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  type="button"
                  id="button-addon3"
                >
                  <HiSearch color="white" size="20px" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
