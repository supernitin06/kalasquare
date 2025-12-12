"use client"
import React from 'react'
import MentorCard from './MentorCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import FormatPage from '../shared/Formatedpage';

const mentors = [
    {
        name: "Arjun Mehta",
        category: "Playback Singer",
        image: "/images/j1.jpg",
        description: "Renowned Bollywood playback singer with 200+ recorded songs."
    },
    {
        name: "Riya Kapoor",
        category: "Vocal Coach",
        image: "/images/j2.jpg",
        description: "Celebrity vocal trainer known for grooming top reality show artists."
    },
    {
        name: "Samar Malik",
        category: "Music Composer",
        image: "/images/j3.jpg",
        description: "Award-winning composer for multiple web series & indie films."
    },
    {
        name: "Neha Bansal",
        category: "Stage Performer",
        image: "/images/j4.jpg",
        description: "Live performer with 500+ concerts across India & abroad."
    }
];

const Judge = () => {
    return (
        <div className='relative w-full flex justify-center items-center overflow-hidden'>
            <div className="flex justify-between items-center flex-col w-full max-w-7xl mx-auto">

                <div className="flex justify-center max-w-7xl items-center flex-col">
                    <FormatPage
                        badge="Guiding Future Voice"
                        heading="Meet the Mentors & js of "
                        highlight="India’s Next Voice"
                        description="India’s Next Voice brings together top singers, composers, and vocal coaches who guide participants in their musical journey."
                        headingwidth="max-w-[744px]"
                    />
                </div>

                <div className='w-full max-h-[550px] bottom-0 px-4 md:px-1 flex overflow-hidden max-w-7xl mx-auto'>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        grabCursor={true}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 15 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 20 }
                        }}
                        className="w-full px-2 md:px-0 items-center h-auto justify-center"
                    >
                        {mentors.map((mentor, index) => (
                            <SwiperSlide
                                key={index}
                                className="shrink-0 w-[260px] h-[300px] px-5 flex justify-center items-center"
                            >
                                <MentorCard
                                    name={mentor.name}
                                    category={mentor.category}
                                    image={mentor.image}
                                    description={mentor.description}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Judge;
