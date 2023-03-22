import React from "react";
import aside1 from "../assets/aside_1.jpg";
import aside2 from "../assets/aside_2.jpg";
import aside3 from "../assets/aside_3.jpg";
import aside4 from "../assets/aside_4.jpg";
import aside5 from "../assets/aside_5.jpg";
import LazyLoad from "react-lazyload";

const Features = () => {
  return (
    <div className="mt-[50px] md:mx-[50px] sm:mx-4">
      <div className="flex md:flex-row sm:flex-col items-center lg:mb-8 sm:mb-6 border">
        {/* IMAGE  */}
        <div className="md:w-[50%]">
        
        
            <img
              src={aside1}
              alt="domain + professional email"
              className="sm:max-h-[410px] md:max-h-full md:order-last"
            />
          
        </div>
        {/* TEXT */}
        <div className="flex sm:flex-col md:flex-col md:w-[50%] md:p-4 lg:px-[52px] sm:px-4 md:order-first">
          <h4 className="font-bold">Domain + Professional Email</h4>
          <h1 className="font-dm sm:text-3xl md:text-4xl font-bold mt-4">
            Build your brand online.
          </h1>
          <p className="mt-4 mb-4 text-[17px] leading-[1.70rem]">
            Get a memorable online address — .com or .co.uk, it's your choice —
            and back it up with a matching email address your customers can
            trust. Get both, plus expert 24x7 support, with this bundle for just
            £1.50/mo.
          </p>

          <button
            type="button"
            className="text-black sm:max-w-[120px] md:max-w-[10rem] bg-white  rounded border-2 text-sm px-4 py-3 text-center mb-4 border-gray-900 hover:text-[#00838C] hover:scale-105 font-medium"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="flex md:flex-row sm:flex-col items-center lg:mb-8 sm:mb-6 border">
        {/* IMAGE  */}
        <div className="md:w-[50%]">
        
          <img
            src={aside2}
            alt="domain + professional email"
            className="sm:max-h-[410px] md:max-h-full"
          />
          
        </div>
        {/* TEXT */}
        <div className="flex sm:flex-col md:flex-col  md:w-[50%] md:p-4 lg:px-[52px] sm:px-4">
          <h4 className="font-bold">Professional Email</h4>
          <h1 className="font-dm sm:text-3xl md:text-4xl font-bold mt-4">
            Build on your success.
          </h1>
          <p className="mt-4 mb-4 text-[17px] leading-[1.70rem]">
            Everyone has email, but that doesn't mean all email is the same.
            Customers are nine times more likely to choose a business with a
            professional address like you@NeueBloom.com.
          </p>

          <button
            type="button"
            className="text-black sm:max-w-[160px] md:max-w-[10rem] bg-white  rounded border-2 text-sm px-5 py-3 text-center mb-4 border-gray-900 hover:text-[#00838C] hover:scale-105 font-medium"
          >
            See Email Plans
          </button>
        </div>
      </div>

      <div className="flex md:flex-row sm:flex-col items-center lg:mb-8 sm:mb-6 border">
        {/* IMAGE  */}
        <div className="md:w-[50%]">
          
            <img
              src={aside3}
              alt="domain + professional email"
              className="sm:max-h-[410px] md:max-h-full md:order-last"
            />
          
        </div>
        {/* TEXT */}
        <div className="flex sm:flex-col md:flex-col  md:w-[50%] md:p-4 sm:px-4 md:order-first">
          <h4 className="font-bold">Hosting</h4>
          <h1 className="font-dm sm:text-3xl md:text-4xl font-bold mt-4">
            Fast, secure and always online.
          </h1>
          <p className="mt-4 mb-4 text-[17px] leading-[1.70rem]">
            Already have a website? Give it the home it deserves. With free SSL,
            industry-leading load times, guaranteed 99.9% uptime and expert,
            24/7 support, your site couldn't ask for more.
          </p>

          <button
            type="button"
            className="text-black sm:max-w-[120px] md:max-w-[8rem] bg-white  rounded border-2 text-sm px-4 py-3 text-center mb-4 border-gray-900 hover:text-[#00838C] hover:scale-105 font-medium"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="flex md:flex-row sm:flex-col items-center lg:mb-8 sm:mb-6 border">
        {/* IMAGE  */}
        <div className="md:w-[50%]">
          <img
            src={aside4}
            alt="domain + professional email"
            className="sm:max-h-[410px] md:max-h-full"
          />
        </div>
        {/* TEXT */}
        <div className="flex sm:flex-col md:flex-col  md:w-[50%] md:p-4 sm:px-4">
          <h4 className="font-bold">Professional Email</h4>
          <h1 className="font-dm sm:px-4 md:text-4xl font-bold mt-4">
            Sell your products to anyone, anywhere.
          </h1>
          <p className="mt-4 mb-4 text-[17px] leading-[1.70rem] ">
            Whether you sell home décor or hip hop beats, our Online Store is
            built to work for you. Easily create a store that fits your brand,
            get found with integrated marketing tools and do it all from your
            smartphone.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="text-black sm:max-w-[160px] md:max-w-[9rem] bg-white  rounded border-2 text-sm px-5 py-3 text-center mb-4 border-gray-900 hover:text-[#00838C] hover:scale-105 font-medium"
            >
              Start For Free
            </button>

            <div className="text-[#00838C] sm:max-w-[160px] md:max-w-[40%] bg-white  text-sm ml-1 py-3 text-center mb-4 border-gray-900 hover:underline hover:scale-105 font-medium">
              Learn More
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row sm:flex-col items-center lg:mb-10 sm:mb-6 border">
        {/* IMAGE  */}
        <div className="md:w-[50%]">
        
          <img
            src={aside5}
            alt="domain + professional email"
            className="sm:max-h-[410px] md:max-h-full md:order-last"
          />
         
        </div>
        {/* TEXT */}
        <div className="flex sm:flex-col md:flex-col  md:w-[50%] md:p-4 sm:px-4 md:order-first">
          <h4 className="font-bold">Domain + Professional Email</h4>
          <h1 className="font-dm sm:text-3xl md:text-4xl font-bold mt-4">
            Build your brand online.
          </h1>
          <main className="mt-4 mb-4 text-[17px] text-lg leading-[1.70rem]">
            <p>
              <span className="font-bold">
                {" "}
                Easily create a modern, professional website
              </span>{" "}
              — no technical skills required — thanks to 100s of
              industry-specific templates.
            </p>
            <p>
              <span className="font-bold">
                Take the guesswork out of building your business{" "}
              </span>{" "}
              with GoDaddy InSight, A.I.-powered advice that's tailored to your
              business.{" "}
            </p>
            <p>
              <span className="font-bold">
                Get found on the sites your customers visit most{" "}
              </span>{" "}
              with built-in tools for SEO, social media and email marketing.
            </p>
            <p>
              <span className="font-bold">
                Add an online store to sell physical and digital products,
              </span>{" "}
              track your inventory and even let customers book appointments
              online.
            </p>
          </main>

          <button
            type="button"
            className="text-black sm:max-w-[140px] md:max-w-[10rem] bg-white  rounded border-2 text-sm px-5 py-3 text-center mb-4 border-gray-900 hover:text-[#00838C] hover:scale-105 font-medium"
          >
            Start For Free
          </button>
          <p className="text-[13px] font-thin">
            No charge, no obligation, nothing to cancel.**
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
