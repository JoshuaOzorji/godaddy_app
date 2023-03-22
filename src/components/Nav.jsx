import Header from "./Header";
import Hero from "./Hero";
import React, { useState } from "react";
import logo1 from "../assets/godaddy_logo1.png";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import {
  AiOutlineQuestionCircle,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import miniLogo from "../assets/short_logo1.png";

import { GrFormClose } from "react-icons/gr";
import shortLogo from "../assets/short_logo1.png";
import { headerLinks, headerSpan } from "./index2.jsx";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <main>
      <nav className="sm:mx-4 md:mx-[50px] lg:mt-0 font-lato my-6">
        {/* SIDEBAR */}
        {open && (
          <>
            <main>
              <AnimatePresence>
                <motion.div
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  exit={{ x: "100vw", duration: 1 }}
                  className={`fixed top-0 left-0 z-10 bg-white border h-[100%] w-[100%] p-4 lg:hidden`}
                >
                  <div>
                    <span className="flex flex-row justify-between">
                      <img src={shortLogo} alt="" className="h-[30px]" />
                      <GrFormClose
                        name="close"
                        className="w-[30px] h-[30px] cursor-pointer hover:animate-pulse delay-200"
                        onClick={openSidebar}
                      />
                    </span>
                    <div className="flex flex-col  justify-between ">
                      <ul className="pr-2 relative">
                        {headerLinks.map((link) => (
                          <>
                            <li
                              key={link.id}
                              className="flex flex-row items-center justify-between rounded py-4 text-2xl font-semibold cursor-pointer "
                            >
                              {link.site}
                              {/* {link.icon} */}
                              {link.subMenu && (
                                <IoIosArrowDown
                                  className={` ${
                                    subMenuOpen &&
                                    "rotate-180 transition delay-100"
                                  } `}
                                  onClick={() => setSubMenuOpen(!subMenuOpen)}
                                />
                              )}
                            </li>
                            {link.subMenu && subMenuOpen && open && (
                              <ul>
                                {link.subMenu.map((subMenuItem, id) => (
                                  <li
                                    key={id}
                                    className="flex px-5 cursor-pointer text-center hover:underline "
                                  >
                                    {subMenuItem.title}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ))}
                      </ul>

                      <ul className="flex flex-col  absolute bottom-6 gap-4">
                        {headerSpan.map((span) => (
                          <li
                            key={span.id}
                            className="flex flex-row items-center gap-1"
                          >
                            {span.icon}
                            {span.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </>
        )}

        <div className="flex flex-row justify-between items-center w-full ">
          <div className="flex flex-row items-center text-[#6e6d6d]">
            <motion.span>
              <FiMenu
                color="black"
                className="w-[30px] h-[30px] cursor-pointer sm:flex lg:hidden hover:animate-pulse"
                onClick={openSidebar}
              />
            </motion.span>

            <img
              src={logo1}
              alt="logo"
              className="w-[140px]  sm:hidden md:flex"
            />

            <img
              src={miniLogo}
              alt="logo"
              className="h-[30px] sm:flex pl-2 md:hidden"
            />

            <div className="sm:hidden lg:flex">
              <p className="pr-4 hover:text-black cursor-pointer delay-100">
                Domain Names
              </p>
              <p className="pr-4 hover:text-black cursor-pointer delay-100">
                Websites & Hosting
              </p>
              <p className="pr-4 hover:text-black delay-100 cursor-pointer">
                Email & Marketing
              </p>
            </div>
          </div>

          <div className="flex flex-row lg:gap-8 sm:gap-4 md:gap-6">
            <AiOutlinePhone className="w-[25px] h-[25px] cursor-pointer" />
            <AiOutlineQuestionCircle className="w-[25px] h-[25px] cursor-pointer" />
            <FiShoppingCart className="w-[25px] h-[25px] cursor-pointer" />
            <AiOutlineUser className="w-[25px] h-[25px] cursor-pointer" />
          </div>
        </div>

        <div className="mt-4">
          <Header />
        </div>
        <div className="mt-4">
          <Hero />
        </div>
      </nav>
    </main>
  );
};

export default Nav;
