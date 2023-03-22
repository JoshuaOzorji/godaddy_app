import React from "react";
import footerLogo from "../assets/gd_guides1.png";
import arrow from "../assets/arrow.png";
import { footerlinks } from "../components/index";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import whiteLogo from "../assets/godaddy_logo_white.png";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <section className="bg-[#111111] ">
      <div className="sm:mx-4 md:mx-[50px] font-lato">
        <div className="pl-[0.8rem] pb-[1.25rem] border-b border-[#484646]">
          <p className="text-[#BAC0C3] sm:text-[16px] md:text-[1.4rem] font-semibold pt-[1.25rem]">
            We love taking your call.
          </p>
          <span className="flex flex-row mt-[14px] mb:[22px]">
            <img
              src={footerLogo}
              alt="godaddy logo"
              className="md:h-[3.20rem] sm:max-h-[25px] lg:max-h-[50px]"
            />
            <img
              src={arrow}
              alt="arrow"
              className="md:h-[3.20rem] sm:max-h-[25px] lg:max-h-[50px] pl-[22px] "
            />
          </span>
        </div>
        <div className="w-full mt-[1.75rem] pb-[10px] border-b-[0.5px] border-[#484646]">
          <p className="text-white sm:text-[13px] md:text-[1rem] text-center ">
            Prices exclude applicable taxes. ICANN fees included.
          </p>
        </div>

        <div className=""></div>

        {/* SM FOOTERLINKS BREAKPOINT */}
        <section className="mb-16">
          {footerlinks.map((question) => {
            return (
              <section>
                <FooterLinks key={question.id} {...question}></FooterLinks>
              </section>
            );
          })}
        </section>

        {/* MD & LG FOOTERLINKS BREAKPOINT */}
        <div className="sm:hidden w-full md:grid md:grid-cols-2 lg:grid-cols-6 ml:grid-cols-6 justify-between md:mt-0 mt-10">
          {footerlinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-medium text-[16px] text-white">
                {footerLink.title}
              </h4>

              <ul className="list-none mt-4 cursor-pointer ">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className={`font-lato text-[#BAC0C3] text-[12.8px] py-[9px] hover:underline`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex md:flex-row md:justify-between md:mt-6 sm:flex-col gap-y-3 md:border-b md:items-center">
          <div className="sm:border-b sm:pb-3 sm:border-[#8a8e90] ">
            <img
              src={whiteLogo}
              alt=""
              className="md:h-[2rem] sm:h-[30px] sm:w-[140px]"
            />
          </div>
          <div className="text-white flex flex-row sm:justify-evenly gap-4 items-center sm sm:py-1 ">
            <SiFacebook size="28px" />
            <BsInstagram size="28px" />
            <FaTwitter size="28px" />
            <BsYoutube size="28px" />
          </div>
        </div>

        <div className="w-full flex md:flex-row sm:flex-col md:justify-between text-[12.8px] mt-3 pb-4">
          <ul className="md:hidden text-[#BAC0C3] sm:flex gap-4 sm:pb-6 justify-between sm:px-4">
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
          <div className="text-white sm:text-center md:w-4/5 sm:pb-8 leading-relaxed sm:text-[12px]">
            <p>
              Copyright © 1999 - 2023 GoDaddy Operating Company, LLC. All Rights
              Reserved. The GoDaddy word mark is a registered trademark of
              GoDaddy Operating Company, LLC in the US and other countries. The
              “GO” logo is a registered trademark of GoDaddy.com, LLC in the US.
            </p>
            <p className="mt-4 ">
              Use of this Site is subject to express terms of use. By using this
              site, you signify that you agree to be bound by these{" "}
              <span className="text-[#57DFDC] hover:underline cursor-pointer">
                Universal Terms of Service.
              </span>
            </p>
          </div>

          <ul className="text-[#BAC0C3] md:flex gap-5 md:max-w-1/5 sm:hidden">
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
