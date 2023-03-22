import React from "react";
import infoImg from "../assets/info.png";
import tvImg from "../assets/tv.png";
import coukImg from "../assets/co_uk.png";
import shopImg from "../assets/shop.png";
import { HiSearch } from "react-icons/hi";
const Header = () => {
  return (
    <div className="flex flex-row justify-between gap-6">
      {/* SEARCH */}

      <div class="input-group relative sm:hidden lg:flex lg:w-2/3 flex-row ">
        <input
          type="search"
          className="relative flex-auto md:w-[28rem] block h-[3rem] px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  mr-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none transition ease-in-out delay-100 "
          placeholder="Type the domain you want"
          aria-label="Search"
        />

        <button
          className="btn px-4 py-2  text-white font-medium text-base ml-0 hover:bg-[#616161] bg-[#00838C] border focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
          type="button"
          id="button-addon3"
        >
          <HiSearch color="white" />
        </button>
      </div>

      {/* SM SEARCH BAR */}
      <div class="input-group relative lg:hidden sm:flex w-full flex-row lg:w-1/3">
        <input
          type="search"
          className="relative flex-auto md:w-[28rem] lg:w-full h-[3rem] px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  mr-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  transition ease-in-out delay-100"
          placeholder="Type the domain you want"
          aria-label="Search"
        />

        <button
          className="py-2 px-4 text-white font-medium text-base ml-0 hover:bg-[#616161] bg-[#00838C] border focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          type="button"
          id="button-addon3"
        >
          <HiSearch color="white" />
        </button>
      </div>

      {/* LOGO AND PRICE */}
      <div className="sm:hidden lg:flex gap-4 pr-0">
        <span className="flex flex-row items-center gap-1 delay-100 transition cursor-pointer">
          <img src={infoImg} alt="info" className="h-[18px] text-[#6e6d6d]  " />
          <p className="text-[#6e6d6d] font-lato text-[13px] hover:text-black">
            £3.67
          </p>
        </span>

        <span className="flex flex-row items-center gap-1 delay-100 transition cursor-pointer">
          <img src={coukImg} alt="info" className="h-[20px] text-[#6e6d6d]" />
          <p className="text-[#6e6d6d] font-lato text-[13px] hover:text-black">
            £0.01
          </p>
        </span>

        <span className="flex flex-row items-center gap-1 delay-100 transition cursor-pointer">
          <img src={shopImg} alt="info" className="h-[22px] text-[#6e6d6d] " />
          <p className="text-[#6e6d6d] font-lato text-[13px] hover:text-black">
            £0.97
          </p>
        </span>

        <span className="flex flex-row items-center gap-1 delay-100 transition cursor-pointer">
          <img src={tvImg} alt="info" className="h-[14px] text-[#6e6d6d] " />
          <p className="text-[#6e6d6d] font-lato text-[13px] hover:text-black">
            £20.65
          </p>
        </span>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
