import React from 'react'

const Hero = () => {
  return (
    <section className='custom-hero-section position-relative'>
        <div className='custom-hero-title position-absolute top-50 left-50'>
            {/* <h1 className='custom-banner-heading'>Explore the Luxury <br/> Furniture</h1> */}
            <div className='button-container mt-4'>
          <div className='discover-btn-border'></div>
          {/* <button className='discover-btn'>SHOP NOW</button> */}
        </div>        </div>
    </section>
  )
}

export default Hero
