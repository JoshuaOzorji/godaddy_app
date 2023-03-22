import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Questions = ({ title, content }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="my-4">
      <header className="flex justify-between max-w-[47rem]">
        <h4 className="w-[47rem] font-bold font-lato md:text-2xl sm:py-8 border-t md:pt-6 sm:pb-3 tracking-wide">
          {title}
        </h4>
        <button
          className="flex max-w-[47rem] h-[2rem] bg-yellow items-center justify-center rounded-lg text-black cursor-pointer ml-4 self-center"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </header>
      {showInfo && (
        <p className="max-w-[47rem] leading-loose text-base font-lato font-light md:pt-3 md:pr-36 sm:w-[90%] pb-6">
          {content}
        </p>
      )}
    </article>
  );
};

export default Questions;
