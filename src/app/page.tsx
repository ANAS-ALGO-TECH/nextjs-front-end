import FeaturedCourses from '@/components/FeaturedCourses'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Instructors from '@/components/Instructors'
import Testimonial from '@/components/Testimonial'
import UpComingWebinars from '@/components/UpComingWebinars'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const Homepage = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonial />
      <UpComingWebinars />
      <Instructors />
      <Footer />
    </main>
  )
}

export default Homepage
