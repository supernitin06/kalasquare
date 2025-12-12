"use client";
import React from "react";

interface FormatPageProps {
    badge?: string;
    heading: string;
    highlight: string;
    description?: string;
    headingwidth?: string;
    badgeColor?: string;
    badgeTextColor?: string;
    highlightColor?: string;
    className?: string;
    children?: React.ReactNode; // 👈 ADD THIS
}

export default function FormatPage({
    badge = "Start Your Journey",
    heading,
    highlight,
    description,
    badgeColor = "#fdeef0",
    badgeTextColor = "#EB4E62",
    highlightColor = "#EB4E62",
    className = "",
    headingwidth = "",
    children, // 👈 USE CHILDREN
}: FormatPageProps) {
    return (
        <div className={`w-full flex flex-col  justify-center items-center md:mt-10  max-w-7xl mx-auto px-4 ${className}`}>
            <div className="flex flex-col items-center w-full">

                {/* Badge */}
                {badge && (
                    <div
                        className="w-auto px-3 h-[58px] flex rounded-4xl justify-center items-center border"
                        style={{
                            background: badgeColor,
                            color: badgeTextColor,
                            borderColor: badgeTextColor,
                        }}
                    >
                        {badge}
                    </div>
                )}

                {/* Heading */}
                <div
                    className={`text-center w-full ${headingwidth} px-4 ${badge?"mt-4":""} font-secondary font-medium text-[clamp(15px,5vw,50px)]`}
                >
                    <span className="text-black">{heading}</span>{" "}
                    <span style={{ color: highlightColor }}>{highlight}</span>
                </div>

                {/* Description */}
                {description && (
                    <div className="text-center w-full max-w-[660px] px-4 text-[#1d1d1d] font-secondary mt-3 text-[clamp(10px,3vw,14px)]">
                        {description}
                    </div>
                )}

                {/* Children */}
                <div className="w-full flex justify-center mt-6">
                    {children}
                </div>
            </div>
        </div>

    );
}
