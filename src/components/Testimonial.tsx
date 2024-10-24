'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import testimonials from '@/data/testimonials'

export const Testimonial = () => {
  return (
    <div className='h-[25rem] w-full bg-white dark:bg-black dark:bg-grid-white/[0.2]'>
      <h2 className='text-5xl font-bold text-center mb-8 z-10'>
        Hear our harmony
      </h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </div>
    </div>
  )
}

export default Testimonial
