import React from "react";

const Policies = () => {
  return (
    <section className="">
      <div className="sm:mx-4 md:mx-[50px] font-lato md:mt-[25px]">
        <div className="mb-6">
          <p className="font-bold underline pb-4 hover:cursor-pointer">
            +, ** View product limitations and legal policies
          </p>
          <p className="pb-4">
            Third-party logos and marks are registered trademarks of their
            respective owners. All rights reserved.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#ededed]">
        <div className="py-14">
          <p className="font-lato text-lg text-center sm:px-6">
            Need help? Call our award-winning support team at{" "}
            <span>020 7084 1810</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policies;
