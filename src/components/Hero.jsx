import React from "react";
import heroBg from "../assets/hero_bg2.jpg";
import smBg from "../assets/godaddy_lady.jpg";
import mdBg from "../assets/godaddy_lady1.jpg";

const Hero = () => {
	return (
		<div className="font-lato ">
			<div className="sm:hidden lg:flex flex-row gap-3 max-h-[450px] relative">
				{/* MAIN */}
				<div className="sm:hidden lg:flex w-4/6 relative ">
					<img src={heroBg} className="rounded h-full object-contain" />
					<div className="absolute flex flex-row flex-1 p-8 w-full justify-between">
						<div className="max-w-[332px]">
							<p className="font-bold text-base">Websites + Marketing</p>
							<h1 className="font-dm font-extrabold text-4xl my-3">
								Create your <br /> website.
							</h1>
							<button className="text-white bg-black font-bold rounded text-sm px-5 py-3.5 text-center w-3/5 mb-5 hover:scale-105 transition">
								Start for Free
							</button>
							<h3 className="">
								Let our GoDaddy Guides build your starter website for FREE. Give
								us a call on 020 7023 9020.
							</h3>
							<p className="font-lato text-xs mt-[24px] tracking-wider">
								No charge, no obligation, nothing to cancel**
							</p>
							{/* </span> */}
						</div>

						{/* <span> */}
						<div className="flex flex-end  ">
							<div className="flex flex-col mt-64 max-w-[250px]">
								<h3 className="text-xs font-bold tracking-wide text-right leading-4 mt-1">
									Catherine Sweet <br />
									BobCat Gallery
								</h3>
								<p className="font-lato text-xs tracking-wider text-right">
									bobcatgallery.co.uk
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* MEDIUM  HERO*/}

				{/* ASIDE */}
				<div className="bg-[#D8EFEF] w-2/6 rounded px-6 pt-6">
					<p className="font-bold text-sm">Domain Names</p>
					<h1 className="font-dm font-extrabold text-4xl my-4">
						Grab a .co.uk <br />
						for £0.01/1st <br />
						yr.
					</h1>
					<p className="text-base">
						3-year purchase required. Additional year(s) £11.99
					</p>
					<button
						type="button"
						className="text-white w-full bg-black font-bold rounded text-sm px-5 py-3.5 text-center my-6 hover:scale-105 transition">
						Find your Domain
					</button>
					<p className="text-xs font-normal absolute">
						Domains include free privacy protection forever
						<span className="relative bottom-[3.5px]"> +</span>
					</p>
				</div>
			</div>

			{/* MEDIUM BREAKPOINT */}

			<div className="sm:hidden lg:hidden md:flex flex-col ">
				<div className="flex flex-col relative items-center">
					<img src={mdBg} alt="godaddy" className="" />
					<div className="mt-8 absolute items-center ">
						<div className="flex flex-col items-center px-4 text-center ">
							<h4 className="font-semibold text-center ">
								Websites + Marketing
							</h4>
							<h2 className="mt-3 font-dm font-semibold text-3xl text-center mb-4">
								Create your website.
							</h2>
							<button className="text-white bg-black font-bold rounded text-sm px-5 py-3.5 text-center max-w-[14rem] mb-5">
								Start for Free
							</button>
							<p className="text-[18px]">
								Let our GoDaddy Guides build your starter website for FREE. Give
								us a call on 020 7023 9020.
							</p>

							<p className="mt-4 text-[12px] tracking-wider">
								No charge, no obligation, nothing to cancel.**
							</p>
						</div>

						<div className="flex flex-col mt-64 ml-[29rem] max-w-[250px] absolute top-32 right-4">
							<h3 className="text-xs font-bold tracking-wide text-right leading-4 mt-1">
								Catherine Sweet <br />
								BobCat Gallery
							</h3>
							<p className="font-lato text-xs tracking-wider text-right">
								bobcatgallery.co.uk
							</p>
						</div>
					</div>
				</div>

				{/*SECOND COLUMN */}
				<div className="bg-[#D8EFEF] mt-4 rounded p-[30px] flex flex-row items-center">
					<div>
						<p className="font-bold sm:text-base md:text-sm sm:text-center sm:mt-6">
							Domain Names
						</p>
						{/* MD H1 */}
						<h1 className="sm:hidden font-dm font-extrabold md:text-4xl sm:text-2xl my-4 ">
							Grab a .co.uk <br />
							for £0.01/1st <br />
							yr.
						</h1>
						{/* SM H1 */}
						<h1 className="font-dm font-extrabold text-4xl my-4 text-center">
							Grab a .co.uk for £0.01/1st yr.
						</h1>
						<p className="text-center">
							3-year purchase required. Additional year(s) £11.99
						</p>

						<p className="text-xs font-medium text-center relative pb-4 tracking-wide mt-4">
							Domains include free privacy protection forever
							<span className="absolute bottom-5"> +</span>
						</p>
					</div>

					<div>
						<button
							type="button"
							className="text-white bg-black font-bold rounded text-sm px-5 text-center py-[1.30rem] text-[15px] mx-4 max-w-[14rem] hover:scale-105 transition">
							Find your Domain
						</button>
					</div>
				</div>
			</div>

			{/* MOBILE BREAKPOINT */}
			<div className="md:hidden">
				<div className="relative sm:flex flex-col">
					<img src={smBg} alt="godaddy" className="" />
					<div className="mt-5 absolute">
						<div className="flex flex-col text-center px-6">
							<h4 className="font-semibold text-center">
								Websites + Marketing
							</h4>
							<h2 className="mt-3 font-dm font-semibold text-2xl text-center mb-4">
								Create your website.
							</h2>
							<button className="text-white bg-black font-bold rounded text-sm px-5 py-2.5 text-center w-full mb-3 hover:scale-105 transition">
								Start for Free
							</button>
							<p className="text-[13px]">
								Let our GoDaddy Guides build your starter website for FREE. Give
								us a call on 020 7023 9020.
							</p>

							<p className="mt-1 text-[10px] tracking-wider">
								No charge, no obligation, nothing to cancel.**
							</p>
						</div>
					</div>

					{/* <div className=" flex flex-col mt-30 absolute -bottom-10 mt-[40rem] overflow-hidden justify-end pl-8">
            <img src={secHero} alt="godaddy" className="rounded max-w-[30%]" />
          </div> */}
				</div>

				{/* MOBILE SECOND COLUMN */}
				<div className="bg-[#D8EFEF] mt-4 rounded p-[40px]mb-40 flex flex-col  px-2">
					<p className="font-bold sm:text-base md:text-sm sm:text-center sm:mt-6">
						Domain Names
					</p>
					{/* MD H1 */}
					<h1 className="sm:hidden font-dm font-extrabold md:text-4xl sm:text-2xl my-4 ">
						Grab a .co.uk <br />
						for £0.01/1st <br />
						yr.
					</h1>
					{/* SM H1 */}
					<h1 className="sm:font-dm font-extrabold md:text-4xl sm:text-2xl my-4 text-center">
						Grab a .co.uk for £0.01/1st yr.
					</h1>
					<p className="sm:text-center">
						3-year purchase required. Additional year(s) £11.99
					</p>
					<button
						type="button"
						className="text-white bg-black font-bold rounded text-sm px-5 md:py-3.5 text-center my-6 sm:py-[1.30rem] sm:text-[15px] mx-4 hover:scale-105 transition">
						Find your Domain
					</button>
					<p className="text-[11px] font-medium text-center relative pb-4 tracking-wide">
						Domains include free privacy protection forever
						<span className="absolute bottom-5"> +</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
