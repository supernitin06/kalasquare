import Image from "next/image";

interface MentorCardProps {
  name: string;
  category: string;
  image: string;
  description: string;
}

export default function MentorCard({ name, category, image, description }: MentorCardProps) {
  return (
    <div className="relative w-[260px] mx-5 h-[300px] group rounded-3xl overflow-hidden shadow-md bg-white">

      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover object-top scale-110 group-hover:scale-100 transition-transform duration-300 ease-in-out"
      />


      {/* Category Tag */}
      <span className="
        absolute top-3 left-3 
        bg-red-500 text-white text-xs px-4 py-1 
        rounded-full shadow 
      ">
        {category}
      </span>

      {/* Name */}
      <div className=" absolute bottom-3 left-4  group-hover:translate-y-0  translate-y-25  transition-transform duration-300 ease-in-out">

        <h2 className="
       
        text-white text-xl font-semibold drop-shadow-lg

        ">
          {name}
          <div className=" mt-5  ">
            {description}
          </div>
        </h2>
      </div>
    </div>
  );
}
