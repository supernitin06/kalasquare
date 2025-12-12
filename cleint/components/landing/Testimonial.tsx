"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import TestimonialCard from "../shared/TestimonialCard";
import { GrNext, GrPrevious } from "react-icons/gr";
import FormatPage from "../shared/Formatedpage";

const test = [
    {
        image: "/images/t1.jpg",
        name: "Rohit Verma",
        testimonial:
            "I’ve always struggled to find platforms that truly support independent artists. Getting covered here helped me reach new listeners and opened the door to professional opportunities.",
        rating: 5,
    },
    {
        image: "/images/t2.jpg",
        name: "Aisha Kapoor",
        testimonial:
            "This platform gave me the visibility I never had before! My songs reached thousands of new listeners and industry professionals.",
        rating: 5,
    },
    {
        image: "/images/t1.jpg",
        name: "Karan Mehta",
        testimonial:
            "Amazing support for independent musicians. The exposure I received helped me land my first commercial project!",
        rating: 4,
    },
    {
        image: "/images/t2.jpg",
        name: "Neha Sharma",
        testimonial:
            "The community here is incredible! I learned, collaborated, and grew as an artist more than I imagined.",
        rating: 5,
    },
];

const Testimonial = () => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const parallaxRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrolled = window.pageYOffset;
                const speed = 0.25;
                const yPos = -(scrolled * speed);
                parallaxRef.current.style.transform = `translateY(${yPos}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section id="testimonials" ref={sectionRef} className="relative  max-w-7xl w-full py-20 overflow-x-hidden overflow-y-visible">
                <div
                    ref={parallaxRef}
                    className="absolute inset-0 -top-[20%] h-[140%] w-screen max-w-full opacity-20 bg-cover bg-center bg-no-repeat will-change-transform transition-transform duration-100 ease-out pointer-events-none"
                    style={{
                        backgroundImage: 'url(/images/t1.jpg)',
                    }}
                />
                <div className="relative z-10 flex justify-center max-w-7xl items-center flex-col mx-auto px-4 w-full min-w-0">
                    <FormatPage
                        badge="Voice Thats Inspire"
                        heading=" "
                        highlight="What Our Artists Say"
                        description="Real experiences from artists who trusted our platform to level up their music career and unlock new opportunities."
                        headingwidth="max-w-[544px]"
                    />
                    <div className="w-full min-h-[161px] relative max-w-7xl mx-auto flex justify-center items-center py-4 overflow-x-hidden min-w-0">

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            grabCursor={true}
                            spaceBetween={20}
                            loop={true}
                           breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 1, spaceBetween: 15 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 2, spaceBetween: 20 }
                        }}
                            className="w-full overflow-hidden items-center max-w-7xl h-auto justify-center min-w-0"
                        >
                            {test.map((data, i) => (
                                <SwiperSlide key={i} className="">
                                    <TestimonialCard
                                        image={data.image}
                                        name={data.name}
                                        testimonial={data.testimonial}
                                        rating={data.rating}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex justify-center mt-4">
                        <button className="hidden md:block prev-btn mr-3 bg-[#EB4E62] text-white px-3 py-3 rounded-full z-10 hover:bg-orange-600 transition-colors text-sm">
                            <GrPrevious />
                        </button>
                        <button className="hidden md:block next-btn bg-[#EB4E62] text-white px-3 py-3 rounded-full z-10 hover:bg-orange-600 transition-colors text-sm">
                            <GrNext />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;
