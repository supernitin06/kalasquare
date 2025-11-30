import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white pt-10   rounded-2xl px-3 py-4 border border-[#F3D9DD] shadow-sm hover:shadow-md transition-all duration-300 w-full md:max-w-[322px] max-h-60 h-50  flex flex-col gap-3">
      <div className="w-12 h-12 rounded-xl bg-[#EB4E62] flex items-center justify-center text-white text-2xl">
        {icon}
      </div>

      <h3 className="text-[#EB4E62] text-[clamp(10px,5vw,15px)] font-semibold leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 text-[clamp(10px,5vw,10px)] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
