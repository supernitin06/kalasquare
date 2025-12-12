"use client";

import React, { useRef } from "react";
import FormatPage from "../shared/Formatedpage";
import SongCard from "../shared/SongCard";
import SmartButton from "../ui/Button";

export const Songsdata = [
  {
    id: 1,
    name: "Aisha Khan",
    song: "Tere Bina Kahin",
    views: "2.4M",
    image: "/images/s1.jpg",
  },
  {
    id: 2,
    name: "Aarya Mehta",
    song: "Tera Saath",
    views: "12M",
    image: "/images/s2.jpg",
  },
  {
    id: 3,
    name: "Ruhan Verma",
    song: "Dil Ki Awaaz",
    views: "8.5M",
    image: "/images/s3.jpg",
  },
  {
    id: 4,
    name: "Aisha Khan",
    song: "Tere Bina Kahin",
    views: "2.4M",
    image: "/images/s4.jpg",
  },
  {
    id: 5,
    name: "Aarya Mehta",
    song: "Tera Saath",
    views: "12M",
    image: "/images/s5.jpg",
  },
  {
    id: 6,
    name: "Ruhan Verma",
    song: "Dil Ki Awaaz",
    views: "8.5M",
    image: "/images/s6.jpg",
  },
];

export const Songs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="songs" ref={sectionRef} className="relative py-20 max-w-7xl w-full ">
      <div className="flex justify-center max-w-6xl items-center flex-col mx-auto">

      <FormatPage
        badge="Music That Matters"
        heading=""
        highlight="Songs We Create Together"
        description="Every participant gets the opportunity to record an original track produced by professional music directors."
        headingwidth="max-w-[744px]"
      />

      {/* Cards Section */}
      <div className="flex justify-center md:justify-between  flex-wrap gap-7 w-full mt-1">
        {Songsdata.map((item) => (
          <SongCard
            key={item.id}
            image={item.image}
            name={item.name}
            song={item.song}
            views={item.views}
          />
        ))}
      </div>
      </div>
    </section>
  );
};
