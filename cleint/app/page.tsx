import Artist from '@/components/landing/Artist'
import CompanyCarousel from '@/components/landing/CompanyCrousal'
import Competition from '@/components/landing/Competition'
import { FAQ } from '@/components/landing/FAQ'
import HeroConfig from '@/components/landing/HeroConfig'
import Judge from '@/components/landing/Judge'
import MentorshipSection from '@/components/landing/MentorshipSection'
import PrizeSection from '@/components/landing/PrizeSection'
import QueryBanner from '@/components/landing/QueryBanner'
import { Songs } from '@/components/landing/Songs'
import Testimonial from '@/components/landing/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div className="w-full flex flex-col  justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col gap-16 md:gap-20">
        <HeroConfig />
        <QueryBanner />
        <Judge />
      </div>
      <Competition />
      <Songs />

      <div className="w-full max-w-7xl flex flex-col gap-16 md:gap-20">
        <Artist />
        <PrizeSection />
        <MentorshipSection />
      </div>
      {/* <CompanyCarousel /> */}
      {/* 
      <Testimonial />
      <FAQ /> */}
    </div>
  )
}

export default page
