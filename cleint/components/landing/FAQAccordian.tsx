"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const faqData = [
    {
        question: "How do I register?",
        answer: "You can register by filling out the form on our registration page."
    },
    {
        question: "Is there any audition fee?",
        answer: "No, auditions are completely free for all participants."
    },
    {
        question: "Age limit?",
        answer: "Participants must be at least 14 years old to apply."
    },
    {
        question: "What format of video is allowed?",
        answer: "MP4, MOV, and AVI formats are accepted."
    },
    {
        question: "How will shortlisting happen?",
        answer: "Our jury panel will evaluate your performance and shortlist candidates."
    },
    {
        question: "Can I submit more than one video?",
        answer: "Yes, you can upload multiple videos if needed."
    },
    {
        question: "Do I need professional equipment to record my audition?",
        answer: "No, you can record using any good-quality phone camera."
    },
    {
        question: "How long should my audition video be?",
        answer: "Your video should be between 1 to 3 minutes long."
    },
    {
        question: "Will I receive feedback if I’m not selected?",
        answer: "No, we only provide feedback to shortlisted candidates."
    },
    {
        question: "Can international participants apply?",
        answer: "Yes, participants from all countries can apply."
    }
];



const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-4 mt-10">



            {faqData.map((item, index) => (
                <div
                    key={index}
                    className={`border border-red-300 rounded-xl px-4 py-3  ${openIndex === index ?" bg-[#eb4e62] text-white":" bg-white "} transition-all duration-300 cursor-pointer `}
                    onClick={() => toggleItem(index)}
                >
                    {/* Question Row */}
                    <div className="flex justify-between items-center">
                        <p className="text-[16px] font-medium">{item.question}</p>

                        <ChevronDown
                            className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                                }`}
                            size={20}
                        />
                    </div>

                    {/* Animated Answer */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 mt-2 opacity-100 text-white" : "max-h-0 text-gray-600 opacity-0"
                            }`}
                    >
                        <p className="text-sm ">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
