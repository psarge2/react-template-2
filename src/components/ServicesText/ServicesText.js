import React from 'react'

import './ServicesText.css'

function ServicesText () {
  return (
    <div className='copy'>
      <h1>Full-Service Travel Planning for Life-Changing Journeys</h1>
      <div className='text__container'>
        <div className='text__wrapper'>
          <p className='services__lg__text'>
          At Getaway, we collaborate with our exclusive travel partners and trusted local guides to design journeys that plunge you deep into a world of wonder, wherever you go—without sacrificing an ounce of comfort along the way. Welcome to luxury travel redefined where enchanting refinements and thrilling discoveries merge into a singular trip of a lifetime! 
          </p>
        </div>
      </div>
      <h1>The Getaway Technique</h1>
      <div className='text__container'>
        <div className='text__wrapper'>
          <div className='text__row shadow'>
            <div className='text__card'>
              <h2>Connect</h2>
              <p className='services__text'>
                We’ll first get to know you—and uncover all the details about your dream vacation—on your complimentary consultation call. This will allow us to customize your proposal to your exact desires (and add in extra special touches tailored to your travel style!).
              </p>
            </div>
            <div className='text__card'>
              <h2>Create</h2>
              <p className='services__text'>
                We’ll prepare and present your customized proposal, and we’ll also gather feedback so we can make any tweaks necessary to ensure it’s a perfect fit for you. Once we finalize your itinerary, you’ll make your trip deposit—and then we’ll take it from there. 
              </p>
            </div>
            <div className='text__card'>
              <h2>Curate</h2>
              <p className='services__text'>
              Leave all of the bookings for your vacation to us, including your flights, hotel, transfers, and private tours. We’re here to create a seamless trip experience from beginning to end, so you can expect every leg of your journey to fit together perfectly. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesText;