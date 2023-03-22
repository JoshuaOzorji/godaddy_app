import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Products = () => {
  return (
    <div className="sm:mx-4 md:mx-[50px] font-lato md:mt-[25px]">
      {/* MD BREAKPOINT */}
      <section className="sm:hidden md:grid grid-cols-4  border rounded text-center ">
        <div className="p-5 hover:bg-black hover:text-white cursor-pointer border  transition delay-100">
          <p className="">
            .co.uk <br />
            £0.01/1st yr
          </p>
        </div>

        <div className="p-5 hover:bg-black hover:text-white cursor-pointer border transition delay-150">
          Professional Email <br />
          £1.99/1st yr
        </div>
        <div className="p-5 cursor-pointer hover:bg-black hover:text-white border transition delay-150">
          SSL Security <br /> £49.99/1st yr
        </div>

        <div className="row-span-2 p-6 cursor-pointer hover:bg-black hover:text-white border treansition delay-150">
          <p className="md:mt-4 lg:mt-6">
            <span className="font-bold"> Self-Managed VPS Hosting </span>
            <br />
            Powerful & flexible. Root access. <br />
            <span className="font-bold"> Hosting. Your. Way.</span>
          </p>
        </div>

        <div className="p-5 cursor-pointer hover:bg-black hover:text-white border delay-150">
          .com <br /> £7.14/1st yr
        </div>
        <div className="p-5 cursor-pointer hover:bg-black hover:text-white border transition delay-150">
          Web Hosting <br /> £3.99/mo <br />
          Includes free SSL
        </div>
        <div className="p-5 cursor-pointer hover:bg-black hover:text-white border text-center transition delay-150">
          WordPress <br />
          £5.99/1st yr
        </div>
      </section>

      {/* MOBILE BREAKPOINT */}
      <main className="mt-5">
        <section className="md:hidden sm:grid grid-cols-2  border rounded text-center ">
          <div className="p-6 hover:bg-black hover:text-white cursor-pointer border transition delay-150">
            <p className="">
              .co.uk <br />
              £0.01/1st yr
            </p>
          </div>

          <div className="p-6 hover:bg-black hover:text-white cursor-pointer border  transition delay-150">
            Professional Email <br />
            £1.99/1st yr
          </div>
          <div className="p-6 cursor-pointer hover:bg-black hover:text-white border  transition delay-150">
            SSL Security <br /> £49.99/1st yr
          </div>

          <div className="p-6 cursor-pointer hover:bg-black hover:text-white border transition delay-150">
            .com <br /> £7.14/1st yr
          </div>
          <div className="p-6 cursor-pointer hover:bg-black hover:text-white border  transition delay-150">
            Web Hosting <br /> £3.99/mo <br />
            Includes free SSL
          </div>
          <div className="p-6 cursor-pointer hover:bg-black hover:text-white border  transition delay-150">
            WordPress <br />
            £5.99/1st yr
          </div>
          <div className="col-span-2 p-6 cursor-pointer hover:bg-black hover:text-white border  transition delay-150">
            <span className="font-bold"> Self-Managed VPS Hosting </span>
            <br />
            Powerful & flexible. Root access. <br />
            <span className="font-bold"> Hosting. Your. Way.</span>
          </div>
        </section>

        {/* <table className="border mt-10">
          <tbody className="">
            <tr className="border">
              <td>.co.uk £0.01/1st yr</td>
              <td>Professional Email £1.99/1st yr</td>
            </tr>
            <tr>
              <td>SSL Security £49.99/1st yr</td>
              <td>.com £7.14/1st yr</td>
            </tr>
            <tr>
              <td>Web Hosting £3.99/mo yr Includes free SSL</td>
              <td>WordPress £5.99/1st yr</td>
            </tr>

            <tr className="text-center">
              <div>
                Self-Managed VPS Hosting Powerful & flexible. Root access.
                Hosting. Your. Way.
              </div>
            </tr>
          </tbody>
        </table> */}
      </main>
    </div>
  );
};

export default Products;
