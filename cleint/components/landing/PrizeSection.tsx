import { Award, Trophy, Medal } from "lucide-react";
import PrizeCard from "../shared/PrizeCard";
import FormatPage from "../shared/Formatedpage";

export default function PrizeSection() {
    return (
        <div className=" flex justify-center max-w-7xl  items-center flex-col">
            <FormatPage
                badge="Awards"
                heading=""
                highlight="Rewards & Recognition"
                description="Celebrate talent with tier-based rewards designed to elevate artists at every level—offering visibility, opportunities, and exclusive benefits for top performers."
                headingwidth="max-w-[644px]"
            />
            <div className="flex  justify-between mt-10 w-full gap-3">

                {/* Card 1 – Top 10 */}
                <PrizeCard
                    icon={<Award className="max-w-14 max-h-14 text-white" />}
                    title="Top 10"
                    items={[
                        "Professional studio recording session",
                        "Featured music video production",
                        "Recognition certificate & badge",
                    ]}
                    footer="Elite Tier"
                    variant="white"
                />

                {/* ⭐ Center Card – 3D Effect */}
                <div className="transform scale-105 -translate-y-3 shadow-2xl shadow-red-300/40 rounded-2xl">
                    <PrizeCard
                        icon={<Trophy className="max-w-14 max-h-14 text-white" />}
                        title="Winner"
                        items={[
                            "Grand Showcase at premium venue",
                            "Exclusive trophy & certificate",
                            "Full PR coverage & media spotlight",
                        ]}
                        footer="Top Tier"
                        variant="red"
                    />
                </div>

                {/* Card 3 – Top 100 */}
                <PrizeCard
                    icon={<Medal className="max-w-14 max-h-14 text-white" />}
                    title="Top 100"
                    items={[
                        "Official KalaSquare Artist Listing",
                        "Access to paid gigs & opportunities",
                        "Community networking benefits",
                    ]}
                    footer="Rising Stars"
                    variant="white"
                />
            </div>

        </div>
    );
}

