"use client";

import Image from "next/image";

interface FeatureItem {
  img: string;
  title: string;
}

interface DeviderProps {
  items: FeatureItem[];
}

// ✅ Your array created here
const featureItems: FeatureItem[] = [
  { img: "/images/ve1.png", title: "Free Online Auditions" },
  { img: "/images/ve2.png", title: "Studio Recording for Top Artists" },
  { img: "/images/ve3.png", title: "Live Grand Finale" },
  { img: "/images/ve4.png", title: "Nationwide Exposure" },
];

// ✅ Pass the array into the component inside SAME file
const Devider: React.FC = () => {
  return (
    <div className=" flex flex-wrap justify-center gap-6 ">
      {featureItems.map((item, index) => (



        <div
          key={index}
          className="
            w-[300px] 
      
            h-[140px] 
            bg-white 
            shadow-sm 
            rounded-2xl 
            border border-[#f8e9ea] 
            flex flex-col 
            relative 
            items-center 
            overflow-hidden 
            justify-center 
            hover:shadow-md 
            transition-all 
            duration-300
          "
        >
          <div className="w-[80%] h-[90%] left-34 opacity-10  -bottom-15  absolute">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>


          <div className="w-10 h-10 relative mb-2">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          <p className="text-sm  z-10 font-medium text-gray-700 text-center px-2">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Devider;
