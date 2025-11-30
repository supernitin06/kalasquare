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
        <div className=" flex justify-center max-w-7xl items-center overflow-hidden   flex-col">
            <FormatPage
                badge=""
                heading=" "
                highlight="Featured by India’s Top Platforms"
                description="Recognized and supported by leading media houses and entertainment platforms that promote emerging talent across India."
                headingwidth="max-w-[544px]"
            />
            {/* 
                <Swiper
                    modules={[Autoplay, FreeMode, Navigation]}
                    navigation={true} // ✅ This enables built-in arrows
                    slidesPerView="auto"
                    freeMode={{ enabled: true }}
                    loop={true}
                    loopAdditionalSlides={companies.length}
                    spaceBetween={20}
                    grabCursor={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        reverseDirection: false,
                    }}
                    speed={3000}
                    allowTouchMove={true}
                    className="w-full"
                > */}
            <div className="w-full min-h-[161px] relative flex justify-center items-center px-4 py-4">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={20}
                    slidesPerView={'auto'}

                    className="w-full md:w-[95%] px-2 md:px-0 items-center h-auto justify-center"
                >
                    {duplicatedCompanies.map((c, i) => (
                        <SwiperSlide key={i} style={{ width: "auto" }}>
                            <CompanyCard logo={c.logo} alt={c.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <button className="absolute hidden md:block left-0 prev-btn mr-3 bg-[#EB4E62] text-white px-3 py-3 rounded-full z-10 hover:bg-orange-600 transition-colors text-sm">
                    <GrPrevious />
                </button>
                <button className="absolute hidden md:block right-0 next-btn bg-[#EB4E62] text-white px-3 py-3 rounded-full z-10 hover:bg-orange-600 transition-colors text-sm">
                    <GrNext />
                </button>
            </div>
        </div>
    );
};

export default CompanyCarousel;

