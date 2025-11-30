"use client";

import { FC } from "react";
import { Check } from "lucide-react";

interface PrizeCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  footer: string;
  variant?: "white" | "red";
}

const PrizeCard: FC<PrizeCardProps> = ({
  icon,
  title,
  items,
  footer,
  variant = "white",
}) => {
  const isRed = variant === "red";

  return (
    <div
      className={`
    flex-1 w-full max-w-[360px] shadow-2xl pt-11 
    rounded-2xl border p-8 flex flex-col items-center
    min-h-[450px]  /* guarantees height but still flexible */
    ${isRed
          ? "bg-[#E95365] text-white border-transparent"
          : "bg-white text-black border-[#F5D9D9]"
        }
  `}
    >

      {/* Icon */}
      <div className="mb-6 p-3 fill-red rounded-2xl text-white">{icon}</div>

      {/* Title */}
      <h2 className={`text-[clamp(10px,3vw,20px)] font-semibold mb-6`}>{title}</h2>

      {/* List */}
      <ul className="space-y-3 mb-8 w-full">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-[clamp(10px,3vw,16px)]  gap-3 text-base">

            <Check className="w-5 bg-[#f3e7e9] p-1 rounded-full h-5 font-bold text-[#EB4E62]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="w-full px-5 h-px bg-gray-200">

      </div>
      {/* Footer */}
      <p
        className={`text-center text-sm mt-4 font-medium  ${isRed ? "text-white" : "text-[#E95365]"
          }`}
      >
        {footer}
      </p>
    </div>
  );
};

export default PrizeCard;
