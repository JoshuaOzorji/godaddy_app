import React from "react";
import { reviewData } from "../components/index";
import { four_five_star } from "../components/index";
import tpLogo from "../assets/trust_pilot.png";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const Reviews = () => {
	return (
		<div className="sm:mx-4 md:mx-[50px] font-lato md:mt-[25px] mt-[52px]">
			<div className="font-bold text-4xl md:max-w-[55%]">
				<h1>Trusted by 21+ million customers around the world.</h1>
			</div>

			<Swiper
				className="sm:hidden md:block"
				modules={[FreeMode, Navigation, Pagination]}
				direction="horizontal"
				freeMode={true}
				navigation={{
					nextEl: ".button-next-slide",
					prevEl: ".button-prev-slide",
				}}
				breakpoints={{
					300: { slidesPerView: 1, spaceBetween: 4 },
					600: { slidesPerView: 1, spaceBetween: 4 },
					768: { slidesPerView: 2, spaceBetween: 8 },
					1024: { slidesPerView: 3, spaceBetween: 8 },
					1280: { slidesPerView: 3, spaceBetween: 8 },
				}}>
				{reviewData.map((card) => (
					<SwiperSlide key={card.id}>
						<div className="flex flex-col items-start p-8 sm:mr-5 mr-0 my-5 rounded-md bg-[#eff3f3] md:min-h-[415px] sm:min-h-[440px] cursor-grab">
							<div className="uppercase text-[0.8rem] font-lato font-bold">
								{card.title}
							</div>

							<img
								src={card.image}
								alt={card.name}
								className=" h-[18px] object-contain mt-[23px]"
							/>

							<div className="font-lato text-lg my-[16px]">{card.content}</div>

							<div className="text-sm font-lato mt-10 font-bold">
								{card.name}
							</div>
						</div>
					</SwiperSlide>
				))}

				{/* REVIEWS */}
				<div className="flex flex-row justify-between items-start">
					<div className="">
						<img src={tpLogo} alt="" className="h-[32px]" />
						<img src={four_five_star} alt="" className="h-[36px] my-[10px]" />
						<p className="text-base font-lato text-[14px]">
							<span className="cursor-pointer">
								4.7 out of 5 stars based on
							</span>
							<span className="font-bold cursor-pointer "> 61,445</span>{" "}
							<span className="cursor-pointer">reviews</span>
							<span className="font-extrabold text-gray-300"> |</span>{" "}
							<span>Showing our 4 and 5 stars reviews.</span>
						</p>
					</div>

					{/* NAVIGATION */}
					<div className="flex flex-row gap-4 ">
						<button className="button-prev-slide">
							<TfiArrowCircleLeft size="60px" />
						</button>
						<button className="button-next-slide">
							<TfiArrowCircleRight size="60px" />
						</button>
					</div>
				</div>
			</Swiper>

			{/* SM SWIPER BREAKPOINT */}

			<Swiper
				className="md:hidden"
				pagination={{
					dynamicBullets: true,
				}}
				modules={[FreeMode, Navigation, Pagination]}
				direction="horizontal"
				freeMode={true}
				navigation={{
					nextEl: ".button-next-slide",
					prevEl: ".button-prev-slide",
				}}
				breakpoints={{
					300: { slidesPerView: 1, spaceBetween: 4 },
					480: { slidesPerView: 1, spaceBetween: 4 },
					768: { slidesPerView: 2, spaceBetween: 8 },
					1024: { slidesPerView: 3, spaceBetween: 8 },
					1280: { slidesPerView: 3, spaceBetween: 8 },
				}}>
				{reviewData.map((card) => (
					<SwiperSlide key={card.id}>
						<div className="flex flex-col items-start p-8 sm:mr-5 mr-0 my-5 rounded-md bg-[#eff3f3] md:min-h-[415px] sm:min-h-[440px] cursor-grab">
							<div className="uppercase text-[0.8rem] font-lato font-bold">
								{card.title}
							</div>

							<img
								src={card.image}
								alt={card.name}
								className=" h-[18px] object-contain mt-[23px]"
							/>

							<div className="font-lato text-lg my-[16px]">{card.content}</div>

							<div className="text-sm font-lato mt-10 font-bold">
								{card.name}
							</div>
						</div>
					</SwiperSlide>
				))}

				<div></div>
			</Swiper>

			{/* REVIEWS */}
			<div className="md:hidden">
				<img src={tpLogo} alt="" className="h-[32px]" />
				<img src={four_five_star} alt="" className="h-[36px] my-[10px]" />
				<p className="text-base font-lato text-[14px]">
					<span className="cursor-pointer">4.7 out of 5 stars based on</span>
					<span className="font-bold cursor-pointer "> 61,445</span>{" "}
					<span className="cursor-pointer">reviews</span>
					<span className="font-extrabold text-gray-300"> |</span>{" "}
					<span>Showing our 4 and 5 stars reviews.</span>
				</p>
			</div>
		</div>
	);
};

export default Reviews;
