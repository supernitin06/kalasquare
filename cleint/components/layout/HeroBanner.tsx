"use client";

import React from "react";
import Image from "next/image";
import NavLink from "../ui/Navlink";
import SmartButton from "../ui/Button";

interface Stat {
  icon: React.ReactNode; // icon component or emoji
  value: string | number;
  label: string;
}

interface HeroBannerProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  stats: Stat[];
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  image,
  title,
  description,
  buttonText,
  buttonLink,
  stats
}) => {
  return (
    <div className="w-full flex justify-center ">
      <div className="relative mt-[86px] h-[675px] w-full max-w-7xl rounded-3xl overflow-hidden shadow-xl">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt="Hero Banner"
            fill
            className="object-fit"
          />
          {/* Dark Overlay */}
        </div>
        <div className="absolute flex flex-col inset-0 bg-black/60">

          {/* Content */}
          <div className="z-10 md:mx-3 md:h-[210px] md:w-[860px] mt-15 relative text-white p-4">
            <h1 className="font-secondary leading-tight drop-shadow-lg text-[clamp(1rem,5vw,3.5rem)]">
              {title}
            </h1>

            <div className="mt-5">
              <NavLink href={buttonLink}>
                <SmartButton className="w-full sm:w-[190px]" text={buttonText} />
              </NavLink>
            </div>
          </div>

          {/* Stats Section - moved inside the relative container */}
          <div className=" md:pr-7  mt-10 mx-3 flex justify-end z-10 w-full  text-white">
            {/* Description */}
            <div className=" max-w-3xl">
              <p className="mt-5 text-[clamp(1rem,3vw,1.5rem)] opacity-90 drop-shadow-md">
                {description}
              </p>
              <div className="mt-10 grid grid-cols-3 gap-10 text-center">
                {stats.map((s, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="max-text-4xl mb-2">{s.icon}</div>
                    <p className="max-text-2xl font-semibold">{s.value}</p>
                    <p className="max-text-sm opacity-80">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
