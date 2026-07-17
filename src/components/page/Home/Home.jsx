import React from 'react'
import Hero from '../Hero/Hero'
import Tomorrow from '../Tomorrow/Tomorrow'
import Offer from '../Offer/Offer'
import Testimonial from '../Testimonial/Testimonial'

export default function Home() {
  return (
    <div className='dark'>
        <Hero />
        <Tomorrow />
        <Offer />
        <Testimonial />
    </div>
  )
}
