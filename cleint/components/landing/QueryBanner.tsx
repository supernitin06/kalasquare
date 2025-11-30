import Image from 'next/image'
import React from 'react'
import RegistrationForm from './Registrationform';
import FormatPage from '../shared/Formatedpage';

interface FeatureItem {
    title: string;
    description: string;
    image: string; // your icon/image path
}

const features: FeatureItem[] = [
    {
        title: "Vocal Mentorship",
        description:
            "Personal training and guidance from industry experts to improve pitch, tone, and performance confidence.",
        image: "/images/v3.png",
    },
    {
        title: "Original Music Production",
        description:
            "Record your own original track with professional composers, producers, and studio engineers.",
        image: "/images/v4.png",
    },
    {
        title: "Music Video Shoot",
        description:
            "Get a high-quality music video filmed and edited by a professional crew to build your artist portfolio.",
        image: "/images/v5.png",
    },
    {
        title: "Live Stage Performance",
        description:
            "Perform in front of real audiences on a full-scale live stage and showcase your talent to the world.",
        image: "/images/v6.png",
    },
];

const QueryBanner = () => {



    return (
        <div className='relative w-full flex justify-center   h-auto  '>
            <div className='relative w-full max-w-7xl  h-auto'>
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0  h-auto ">
                    <Image
                        src="/images/query.jpg"
                        alt="Hero Banner"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Dark Overlay */}
                <div className="relative  h-auto z-10 bg-[#FFFAF1]/95 flex justify-between items-center flex-col py-8 md:py-1">
                    <div className=" flex justify-center max-w-7xl  items-center flex-col">

                        <FormatPage
                            badge="Start Your Journey"
                            heading=""
                            highlight="A Stage Built for Every Voice"
                            description="India’s Next Voice gives singers across India a chance to train with industry mentors, record their own original song, and perform on major digital and live platforms — all in one journey."
                            headingwidth="max-w-[744px]"
                        />
                    </div>
                    <div className='mt-5  mb-10  w-full justify-center md:flex-row flex-col px-3 gap-15  items-center flex'>
                        <div className='flex flex-col max-w-[750px]   space-y-6'>

                            {features.map((item, index) => (
                                <div key={index} className="pb-8">
                                    {/* ICON IMAGE */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12  h-12 rounded-lg bg-[#EB4E62] flex items-center justify-center">
                                            <img src={item.image} alt={item.title} className="max-w-6  max-h-6" />
                                        </div>

                                        {/* TEXT */}
                                        <div className=' w-[85%]'>
                                            <h3 className="text-[clamp(14px,3vw,16px)] font-semibold text-gray-900 font-serif">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-[clamp(10px,3vw,12px)] mt-1 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* DIVIDER */}
                                    {index !== features.length - 1 && (
                                        <div className="border-b border-[#e6b1b8] mt-4"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className=' max-w-[750px]  space-y-6'>

                            <RegistrationForm />
                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default QueryBanner
