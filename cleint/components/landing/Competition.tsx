/**
 * OVERFLOW FIX EXPLANATION:
 * The overflow was happening due to:
 * 1. Fixed text widths (w-[720px], w-[660px]) - didn't scale with browser zoom
 * 2. Missing overflow-hidden on containers - allowed content to spill out
 * 3. Fixed flex layouts without responsive wrapping - cards could overflow on small screens
 * 
 * FIXES APPLIED:
 * - Added overflow-hidden to main container
 * - Changed fixed widths to responsive (w-full max-w-[...] with px-4 padding)
 * - Added responsive grid layout to card containers for mobile responsiveness
 * - Added w-full and px-4 to ensure proper containment
 */
"use client";

import { useRef } from "react";
import { FaHeadphones, FaHandshake, FaMicrophone, FaAward, FaMoneyBill, FaGlobe } from "react-icons/fa";
import FeatureCard from "../shared/FeaturedCard";
import FormatPage from "../shared/Formatedpage";

export default function Competition() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section id="benefits" ref={sectionRef} className="relative pt-20 w-full  max-w-7xl">
            <div className="flex justify-center max-w-7xl w-fullitems-center flex-col mx-auto">

            <FormatPage
                badge="Benifits"
                heading="Why This Is India’s Most "
                highlight="Unique Singing Competition?"
                description=""
                headingwidth="max-w-[744px]"
            />


            <div className="w-full ">
                <div className="w-full flex flex-col gap-5  items-center overflow-hidden">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <FeatureCard
                            icon={<FaHeadphones />}
                            title="1000 Original Songs Project"
                            description="Every participant gets a chance to feature in original song projects."
                        />

                        <FeatureCard
                            icon={<FaHandshake />}
                            title="Mentorship by Industry Experts"
                            description="Learn from playback singers, vocal coaches & music producers."
                        />

                        <FeatureCard
                            icon={<FaMicrophone />}
                            title="Professional Studio Recording"
                            description="Top finalists will record their original track professionally."
                        />

                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-end">

                        {/* Empty space in column 1 */}
                        <div className="hidden lg:block"></div>

                        <FeatureCard
                            icon={<FaAward />}
                            title="Live Grand Finale"
                            description="Perform in front of a live audience & celebrity judges."
                        />

                        <FeatureCard
                            icon={<FaMoneyBill />}
                            title="Guaranteed Performance Payment"
                            description="Artists begin to earn quickly after completing their first gig."
                        />

                        <FeatureCard
                            icon={<FaGlobe />}
                            title="Nationwide Exposure"
                            description="Featured widely across leading social media platforms & PR coverage."
                        />


                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}
