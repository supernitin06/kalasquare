"use client";

import Image from "next/image";

const items=[
    { img: "/images/audition.png", title: "Free Online Auditions" },
    { img: "/images/recording.png", title: "Studio Recording for Top Artists" },
    { img: "/images/finale.png", title: "Live Grand Finale" },
    { img: "/images/exposure.png", title: "Nationwide Exposure" },
  ]

interface FeatureItem {
  img: string;
  title: string;
}

interface FeaturesRowProps {
  items: FeatureItem[];
}

const FeaturesRow: React.FC<FeaturesRowProps> = ({ items }) => {
  return (
    <div className="w-full flex justify-center gap-6 py-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-[260px] h-[110px] bg-white shadow-sm rounded-2xl border border-[#f8e9ea] flex flex-col items-center justify-center hover:shadow-md transition-all duration-300"
        >
          <div className="w-10 h-10 relative mb-2">
            <Image 
              src={item.img} 
              alt={item.title} 
              fill 
              className="object-contain" 
            />
          </div>
          <p className="text-sm font-medium text-gray-700">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesRow;
