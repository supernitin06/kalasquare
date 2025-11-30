"use client"
import React from 'react'
import MentorCard from './MentorCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import FormatPage from '../shared/Formatedpage';


const Judge = () => {
    return (
        <div className='relative w-full flex justify-center  items-center overflow-hidden'>
            <div className="flex justify-between items-center flex-col w-full  max-w-7xl mx-auto ">
                <div className=" flex justify-center max-w-7xl  items-center flex-col">

                    <FormatPage
                        badge="Guiding Future Voice"
                        heading="Meet the Mentors & Judges of "
                        highlight="India’s Next Voice"
                        description="India’s Next Voice brings together a panel of industry-leading singers, performers, composers, and vocal trainers who have inspired thousands of artists across India. Their expertise will guide participants throughout their musical journey — from vocal training to stage performance and original song creation."
                        headingwidth="max-w-[744px]"
                    />
                </div>

                <div className='w-full max-h-[550px]  bottom-0 px-4 md:px-1 flex overflow-hidden max-w-7xl mx-auto'>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        grabCursor={true}
                        spaceBetween={20}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            }
                        }}
                        className="w-full px-2 md:px-0 items-center h-auto justify-center"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                            <SwiperSlide
                                key={i}
                                className="shrink-0 w-[260px] h-[300px] px-5 flex justify-center items-center"
                            >

                                <MentorCard
                                    name="Arjun Mehta"
                                    category="Playback Singer"
                                    image="/images/judge.jpg"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>

    )
}

export default Judge
