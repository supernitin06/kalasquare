import Image from "next/image";

interface Props {
    image: string;
    name: string;
    song: string;
    views: string;
}

export default function SongCard({ image, name, song, views }: Props) {
    return (
        <div className="border w-[360px] h-[390px] cursor-pointer hover:bg-[#FFFAF1] p-3 border-pink-300 rounded-2xl pb-3 bg-white shadow-sm hover:shadow-md transition max-w-[381px]">

            {/* Image wrapper */}
            <div className="relative w-full h-[70%]   rounded-xl overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="px-3">
                <h2 className="mt-3 font-semibold text-lg">{name}</h2>
                <p className="text-gray-600 -mt-1">{song}</p>

                <p className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                    👁️ {views}+ views
                </p>
            </div>
        </div>
    );
}
