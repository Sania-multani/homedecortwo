import React from 'react'
import Hero from './Pages/HomePage/Hero'
import Category from './Pages/HomePage/Category'
import CategorySlider from './Pages/HomePage/CategorySlider'
import CTABanner from './Pages/HomePage/CTABanner'
import Gallery from './Pages/HomePage/Gallery'
import TestimonialSection from './Pages/Testimoinial'
import CTASection from './Pages/HomePage/CTA'
import Products from './Pages/HomePage/Products'
import TopSellings from './Pages/TopSellings'

const Wrapper = () => {
  return (
    <>
      <Hero/>
      <CategorySlider/>
      <Category/>
      <CTABanner/>
      <TopSellings/>
      <CTASection/>
      <Products/>
      <TestimonialSection/>
      <Gallery/>
    </>
  )
}

export default Wrapper
