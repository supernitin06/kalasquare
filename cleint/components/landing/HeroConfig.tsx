"use client";

import { useRef } from "react";
import { Mic, Music, Award } from "lucide-react";
import HeroBanner from "../layout/HeroBanner";

export default function HeroConfig() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" ref={sectionRef} className="relative md:py-10 ">
      <HeroBanner
        image="images/hero.png"
        title="India's Next Voice — India's Largest Digital Singing Talent Hunt"
        description="Step into India's biggest digital singing competition and get a chance to record your own original song, guided by industry mentors and featured across national platforms."
        buttonText="Register Now"
        buttonLink="/register"
        stats={[
          { icon: <Mic size={40} />, value: 1000, label: "Singers" },
          { icon: <Music size={40} />, value: 1000, label: "Original Songs" },
          { icon: <Award size={40} />, value: 1000, label: "Grand Showcase" },
        ]}
      />
    </section>
  );
}
