"use client";

import { FC, useState, useEffect, useRef } from "react";
import { Camera, Mic, Music, Users, Award } from "lucide-react";
import FormatPage from "../shared/Formatedpage";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  highlight: boolean;
}

const detail = [
  {
    icon: "Camera",
    title: "Professional Mentorship",
    description:
      "Learn directly from experienced vocal coaches, music directors, and industry experts to sharpen your singing and stage presence.",
  },
  {
    icon: "Mic",
    title: "Vocal Training",
    description:
      "Improve your vocal range, control, and confidence with structured and personalized training sessions.",
  },
  {
    icon: "Music",
    title: "Studio Experience",
    description:
      "Get hands-on experience in a professional studio environment and learn how real music production works.",
  },
  {
    icon: "Users",
    title: "Community Support",
    description:
      "Join a vibrant community of singers, artists, and performers to learn, grow, and collaborate.",
  },
  {
    icon: "Award",
    title: "Performance Opportunities",
    description:
      "Showcase your talent in events, competitions, and stage shows to build real-world performance experience.",
  },
];

// Map string → actual icon
const IconMapper: any = {
  Camera: Camera,
  Mic: Mic,
  Music: Music,
  Users: Users,
  Award: Award,
};

const FeatureItem: FC<FeatureItemProps> = ({
  icon,
  title,
  description,
  highlight,
}) => {
  return (
    <div
      className={`relative flex gap-4 rounded-3xl p-7 border border-gray-100 max-w-[800px]   items-start transition
        ${highlight ? "min-h-[150px] bg-[#E95365] text-white transition-all duration-500 " : "transition-all duration-500  min-h-[90px] bg-white"}
      `}
    >
      <div
        className={`absolute -left-5 top-[10%]  ${highlight
          ? "border-2 border-white"
          : "border-10 border-[#eb4e62]"
          } bg-[#eb4e62] text-white w-16 h-16 flex justify-center items-center rounded-xl`}
      >
        {icon}
      </div>

      <div className="pl-10">
        <h3
          className={`text-lg font-semibold ${highlight ? "text-white" : "text-black"
            }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm mt-2 opacity-90 transition-all  ${highlight
            ? "opacity-100 translate-y-0 duration-500"
            : "hidden "
            }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const MentorshipSection = () => {
  // highlight first item by default
  const [highlightIndex, setHighlightIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const speed = 0.25;
        const yPos = -(scrolled * speed);
        parallaxRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <section id="mentorship" ref={sectionRef} className="relative py-20 overflow-hidden w-full min-w-0">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 -top-[20%] h-[140%] w-full opacity-20 bg-cover bg-center bg-no-repeat will-change-transform transition-transform duration-100 ease-out"
          
        />
        <div className="relative z-10 flex justify-center w-full items-center flex-col">
        <FormatPage
          badge="Your Music, Our Mission"
          heading=""
          highlight="Why Singers Choose India’s Next Voice"
          description="We provide an end-to-end platform where aspiring singers don’t just learn — they create, perform, and launch their musical identity with professional industry support."
          headingwidth="max-w-[594px]"
        />
        {/* Left Image */}

        <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-20">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex h-[400px] lg:h-[560px] justify-center items-center rounded-xl overflow-hidden min-w-0">
            <img
              src="/images/i4.jpg"
              alt="Mentorship"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Items */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 min-w-0">
            {detail.map((item, i) => {
              const IconComponent = IconMapper[item.icon];

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHighlightIndex(i)}
                  onMouseLeave={() => setHighlightIndex(0)}
                >
                  <FeatureItem
                    highlight={highlightIndex === i}
                    icon={<IconComponent size={48} />}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </section>
  );
};

export default MentorshipSection;
