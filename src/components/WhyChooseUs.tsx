'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'
import musicContent from '@/data/music_content'

export const WhyChooseUs = () => {
  return (
    <div className='my-5 h-[40rem] w-full'>
      <StickyScroll content={musicContent} />
    </div>
  )
}

export default WhyChooseUs
