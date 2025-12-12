"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import CompanyCard from "../shared/CompanyCard";
import { GrNext, GrPrevious } from "react-icons/gr";
import FormatPage from "../shared/Formatedpage";

const companies = [
    { logo: "/images/l1.png", alt: "Bollywood Hungama" },
    { logo: "/images/l2.png", alt: "JioSaavn" },
    { logo: "/images/l3.png", alt: "FM Plus" },
    { logo: "/images/l4.png", alt: "Wynk Music" },
    { logo: "/images/l5.png", alt: "Bandcamp" },
];

// Duplicate companies for seamless marquee loop
const duplicatedCompanies = [...companies, ...companies, ...companies];

const CompanyCarousel = () => {
    return (
        <div className="w-full relative flex justify-center items-center overflow-x-hidden  flex-col">
            <div className="w-full max-w-7xl mx-auto px-4">
                <FormatPage
                    badge=""
                    heading=" "
                    highlight="Featured by India's Top Platforms"
                    description="Recognized and supported by leading media houses and entertainment platforms that promote emerging talent across India."
                    headingwidth="max-w-[544px]"
                />
            </div>

            <div className="w-full min-h-[161px] relative max-w-7xl mx-auto flex justify-center items-center px-4 py-4 overflow-x-hidden">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{ nextEl: ".net-btn", prevEl: ".prv-btn" }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={20}
                    slidesPerView={5}                 // 👈 EXACT 5 cards
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        480: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },   // 👈 Desktop: exactly 5 cards
                    }}
                    className="w-full overflow-hidden px-2 md:px-10 items-center h-auto justify-center"
                >

                    {duplicatedCompanies.map((c, i) => (
                        <SwiperSlide className="" key={i} style={{ width: "auto" }}>
                            <CompanyCard logo={c.logo} alt={c.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <button className="absolute hidden md:block left-2 md:left-4 prv-btn bg-[#EB4E62] text-white px-3 py-3 rounded-full z-10 hover:bg-orange-600 transition-colors text-sm shadow-lg">
                    <GrPrevious />
                </button>
                <button className="absolute hidden  md:block right-2 md:right-4 net-btn bg-[#EB4E62] text-white px-3 py-3 rounded-full z-10 hover:bg-orange-600 transition-colors text-sm shadow-lg">
                    <GrNext />
                </button>
            </div>
        </div>
    );
};

export default CompanyCarousel;

