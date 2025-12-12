"use client";

import Image from "next/image";
import { FC } from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  image: string;
  name: string;
  testimonial: string;
  rating?: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  image,
  name,
  testimonial,
  rating = 5,
}) => {
  return (
    <div className="w-full max-w-[600px] justify-center items-center min-h-[280px] max-h-[400px] md:max-h-[350px] mx-auto flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 lg:p-10 rounded-3xl border border-pink-200 shadow-sm overflow-hidden min-w-0">
      
      {/* Image Section */}
      <div className="w-full md:w-1/3 shrink-0 min-w-0">
        <div className="relative w-full h-[210px] rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center w-full md:w-2/3 overflow-hidden min-w-0">

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 overflow-hidden text-ellipsis line-clamp-4 wrap-break">
          {testimonial}
        </p>

        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

        {/* Stars */}
        <div className="flex gap-1 mt-2">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
