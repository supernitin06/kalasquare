"use client";

import Link from "next/link";
import React from "react";

interface SmartButtonProps {
  text: string;
  bgColor?: string;           // main button bg
  hoverBgColor?: string;      // hover color
  iconBgColor?: string;       // round icon background
  icon?: string;              // arrow, emoji, etc.
  className?: string;        // additional classes
  type?: "button" | "submit" | "reset";
}

const SmartButton: React.FC<SmartButtonProps> = ({
  text,
  bgColor = "fill-red",
  hoverBgColor = "bg-red-700",
  iconBgColor = "bg-amber-50",
  icon = "→",
  className = "",
  type = "button",
}) => {
  return (
    
      <button
        type={type}
        className={`
          relative w-[131px] h-11 cursor-pointer text-white 
          p-0.5 pl-5 rounded-full flex items-center  space-x-2 
          transition-colors 
          ${bgColor} hover:scale-105 duration-300 transition-all ${hoverBgColor} ${className}  
        `}
      >
        <span className="font-medium text-lg">{text}</span>

        <div
          className={`
            absolute right-px w-11 h-10 flex justify-center items-center 
            rounded-full ${iconBgColor}
          `}
        >
          <span className="text-[#EB4E62] pb-1 text-2xl">{icon}</span>
        </div>
      </button>
 
  );
};

export default SmartButton;
