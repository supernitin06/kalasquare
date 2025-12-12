import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

interface Props {
    image: string;
    name: string;
    text: string;
    location:string;
}

export default function ArtistCard({ image, name, text, location }: Props) {
    return (
        <div className="border md:w-[260px] w-full h-[400px] md:h-[380px] hover:bg-[#FFFAF1] border-[#EB4E62] rounded-2xl pb-3 bg-white shadow-sm hover:shadow-md transition md:max-w-[261px]">

            {/* Image wrapper */}
            <div className="relative w-full h-[65%]   rounded-xl overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />

                <div className="absolute items-center space-x-2 w-auto max-text-[14px] fill-red text-white flex justify-center rounded-4xl  py-2 px-4 top-4 right-3">
                   <span><MdLocationPin /></span> {location} 
                </div>
            </div>
            <div className="px-3">
                <h2 className="mt-3 font-semibold text-lg">{name}</h2>
                <p className="text-gray-600 -mt-1">{text}</p>

                <p className="flex text-[#EB4E62] items-center gap-2 text-sm mt-2">
                   View <span><IoIosArrowRoundForward /></span>
                </p>
            </div>
        </div>
    );
}
