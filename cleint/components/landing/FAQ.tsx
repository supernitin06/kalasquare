import React from 'react'
import FAQAccordion from './FAQAccordian'
import FormatPage from '../shared/Formatedpage'

export const FAQ = () => {
    return (
        <>
            <div className=" flex justify-center max-w-6xl items-center flex-col">
                <FormatPage
                    badge=""
                    heading=" "
                    highlight="Frequently Asked Questions"
                    description="India’s Next Voice helps aspiring singers create their identity in the music industry through expert mentorship, original song creation, stage performances, and strong digital visibility. If you’re passionate about singing, this is where your journey truly begins."
                    headingwidth="max-w-[544px]"
                />


                <FAQAccordion />
            </div>
        </>
    )
}

