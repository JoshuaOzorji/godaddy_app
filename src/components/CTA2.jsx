import React from "react";
import gdlogo1 from "../assets/bg4.jpg";
import guidesBlack from "../assets/guides_black.png";
import guidesSm from "../assets/lady_guide_sm1.jpg";
import guidesMd from "../assets/lady_guide_md.jpg";
import { HiSearch } from "react-icons/hi";

const CTA2 = () => {
  return (
    <section className="md:mt-[48px]">
    
      {/* LG BREAKPOINT */}
      <div className="w-full relative lg:flex sm:hidden">
        <img src={gdlogo1} className="h-max" />
        <div className="flex md:flex-row absolute">
          <div className="w-2/4 mt-[60px] ml-[50px]">
            <p className="">Jamila R.</p>
            <p className="font-thin text-sm">GoDaddy Guide</p>
          </div>
          <div className="w-2/4 p-12">
            <img
              src={guidesBlack}
              alt=""
              width="175px"
              height="47px"
              className="mb-[46px]"
            />
            <h1 className="font-dm text-5xl font-bold my-6 mb-[14px]">
              Why go with GoDaddy?
            </h1>
            <p className="mt-4 mb-4 text-[17px] leading-[1.70rem]">
              Because we know that even the best technology is only as good as
              the people behind it. That's why we offer expert, 24/7 phone
              support, plus a lot more.
            </p>
            <p className="mb-[14px]">
              Call our technical support team at 020 7084 1810.
            </p>
            <div class="input-group relative flex flex-row mb-[24px]">
              <input
                type="search"
                className="relative flex-auto md:w-[28rem] block h-[3rem] px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border mr-0 border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white  focus:outline-none"
                placeholder="Type a question"
                aria-label="Search"
              />

              <button
                className="btn inline-block px-10 py-2  text-white font-medium text-base ml-0 hover:bg-[#00838C] bg-black border focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                id="button-addon3"
              >
                Search
              </button>
            </div>
            <div className="flex flex-row justify-between mt-2">
              <p className="font-bold hover:underline hover:text-[#00838C] cursor-pointer">
                View How-To Articles
              </p>
              <p className="font-bold hover:underline hover:text-[#00838C] cursor-pointer">
                Read Our Blog
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MEDIUM SCREEN */}
      <div className="w-full relative md:flex lg:hidden sm:hidden">
        <img src={guidesMd} className="h-max" />
        <div className="flex md:flex-row absolute">
          <div className="w-2/4 mt-[60px] ml-[50px]">
            <p className="">Jamila R.</p>
            <p className="font-thin text-sm">GoDaddy Guide</p>
          </div>
          <div className="w-2/4 p-12">
            <img
              src={guidesBlack}
              alt=""
              width="175px"
              height="47px"
              className="mb-[46px]"
            />
            <h1 className="font-dm text-5xl font-bold my-6 mb-[14px]">
              Why go with GoDaddy?
            </h1>
            <p className="mt-4 mb-4 text-[17px] leading-[1.70rem]">
              Because we know that even the best technology is only as good as
              the people behind it. That's why we offer expert, 24/7 phone
              support, plus a lot more.
            </p>
            <p className="mb-[14px]">
              Call our technical support team at 020 7084 1810.
            </p>
            <div class="input-group relative flex flex-row mb-[24px]">
              <input
                type="search"
                className="relative flex-auto md:w-[28rem] block h-[3rem] px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border mr-0 border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white  focus:outline-none"
                placeholder="Type a question"
                aria-label="Search"
              />

              <button
                className="btn inline-block px-10 py-2  text-white font-medium text-base ml-0 hover:bg-[#00838C] bg-black border focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                id="button-addon3"
              >
                Search
              </button>
            </div>
            <div className="flex flex-row justify-between mt-2">
              <p className="font-bold hover:underline hover:text-[#00838C] cursor-pointer">
                View How-To Articles
              </p>
              <p className="font-bold hover:underline hover:text-[#00838C] cursor-pointer">
                Read Our Blog
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SMALL SCREEN */}
      <div className="w-full  md:hidden sm:flex flex-col">
        <div className="relative sm:flex mt-6">
          <img src={guidesSm} alt="guides img" />

          <div className="w-2/4 absolute">
            <p className="font-medium pl-6 mt-4">Jamila R.</p>
            <p className="font-thin text-sm pl-6">GoDaddy Guide</p>
          </div>
        </div>

        <div className="mt-[33px] mx-4">
          <img
            src={guidesBlack}
            alt="GoDaddy guides"
            height="34px"
            width="185px"
          />

          <div className="">
            <h1 className="font-dm text-4xl font-bold my-6 mb-[14px]">
              Why go with GoDaddy?
            </h1>
            <p className="mt-4 mb-4 text-[17px] leading-[1.70rem]">
              Because we know that even the best technology is only as good as
              the people behind it. That's why we offer expert, 24/7 phone
              support, plus a lot more.
            </p>
            <p className="mb-[14px]">
              Call our technical support team at 020 7084 1810.
            </p>
            <div class="input-group relative flex flex-row mb-[24px]">
              <input
                type="search"
                className="relative flex-auto md:w-[28rem] block h-[3rem] px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  mr-0 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Type a question"
                aria-label="Search"
              />

              <button
                className="btn  px-4 py-2  text-white font-medium text-base ml-0 hover:bg-[#616161] bg-black border focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                id="button-addon3"
              >
                <HiSearch color="white" />
              </button>
            </div>
            <div className="flex flex-row justify-between mt-2">
              <p className="font-bold hover:underline hover:text-[#00838C] cursor-pointer hover:bg-[#f2f2f2]">
                View How-To Articles
              </p>
              <p className="font-bold hover:underline hover:text-[#00838C] cursor-pointer hover:bg-[#f2f2f2]">
                Read Our Blog
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA2;
