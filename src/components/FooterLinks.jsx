import React from "react";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { useState } from "react";

const FooterLinks = ({ title, ...footerlinks }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="md:hidden ">
      <header className=" md:hidden flex justify-between max-w-[47rem]">
        <h4 className="w-[47rem] font-semibold font-lato text-[14px] pt-4 text-white">
          {title}
        </h4>
        <button
          className="flex max-w-[47rem] h-[2rem] bg-yellow items-center justify-center rounded-lg cursor-pointer ml-4 self-center"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <IoIosRemove className="text-white" />
          ) : (
            <IoMdAdd className="text-white" />
          )}
        </button>
      </header>
      {showInfo && (
        <ul className="leading-loose text-base font-lato font-light pt-3 pr-36 pb-6 text-white">
          {footerlinks.links?.map((link) => (
            <li
              key={link.name}
              className={`font-lato text-[#cdcdcd] text-[12.8px] py-[9px] `}
            >
              {link.name}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
export default FooterLinks;
