import ArtistCard from "../shared/ArtistCard";
import FormatPage from "../shared/Formatedpage";
import SmartButton from "../ui/Button";

export const artists = [
  {
    "id": 1,
    "name": "Kavya Sharma",
    "text": "Indie acoustic storyteller capturing hearts with meaningful melodies",
    "image": "/images/a1.jpg",
    "location": "Bengaluru"
  },
  {
    "id": 2,
    "name": "Aryani Malhotra",
    "text": "Entered with a motivational pop song and gained instant audience love",
    "image": "/images/a2.jpg",
    "location": "Chandigarh"
  },
  {
    "id": 3,
    "name": "Meera Sood",
    "text": "Rising voice in soft-ballad genre with growing fanbase across India",
    "image": "/images/a3.jpg",
    "location": "Jaipur"
  },
  {
    "id": 4,
    "name": "Rohan Verma",
    "text": "Launched with a soulful romantic track now trending across platforms",
    "image": "/images/a4.jpg",
    "location": "Delhi"
  },
  {
    "id": 5,
    "name": "Kavya Sharma",
    "text": "Launched with a soulful romantic track now trending across platforms",
    "image": "/images/a5.jpg",
    "location": "Mumbai"
  },
  {
    "id": 6,
    "name": "Tanya Joseph",
    "text": "Powerful anthem singer now performing in multiple digital concerts",
    "image": "/images/a6.jpg",
    "location": "Lucknow"
  },
  {
    "id": 7,
    "name": "Aarav Chauhan",
    "text": "Known for fusion-style singing blending classical & contemporary music",
    "image": "/images/a7.jpg",
    "location": "Pune"
  },
  {
    "id": 8,
    "name": "Gaurav Sharma",
    "text": "Renowned for powerful live vocals with 250+ concerts across India",
    "image": "/images/a8.jpg",
    "location": "Kochi"
  }
]

export default function Artist() {
  return (
    <div className=" flex justify-center max-w-7xl  items-center flex-col">

      <FormatPage
        badge="Stars Of Tomorrow "
        heading="Artist Who Started Their "
        highlight="Journey With Us"
        description="These talented singers joined India’s Next Voice and are now shining across digital platforms with their original songs, music videos, and stage performances."
        headingwidth="max-w-[544px]"
      />

      <div className="flex justify-around flex-wrap gap-y-7">
        {artists.map((item) => (
          <ArtistCard
            key={item.id}
            image={item.image}
            name={item.name}
            text={item.text}
            location={item.location}
          />
        ))}
      </div>
      <div className="mt-8">
        <SmartButton text="View All Singer" className="w-[210px]" />

      </div>
    </div>
  );
}

