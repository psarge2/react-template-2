import React from 'react'
import CardsItem from './CardsItem'
import './Cards.css'

function CardsProduct() {
  return (
      <div className='cards'>
        <h1>Choose from these AMAZING regions!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardsItem 
              src="images/img-10.jpg"
              text="Feed the giraffes in a local village on a Safari Tour"
              label='Africa'
              path='/sign-up'
              />
              <CardsItem 
              src="images/img-11.jpg"
              text="Explore Port Jackson on your way to visit the Sidney Opera House"
              label='Austrailia'
              path='/services'
              />
              <CardsItem 
              src="images/img-12.jpg"
              text="Experience the castles of old on a visit to Scottish Island, Skye"
              label='Europe'
              path='/sign-up'
              />   
            </ul>
            <ul className="cards__items">
              <CardsItem 
              src="images/img-13.jpg"
              text="Enjoy the Crystal Clear Water of Port Katsiki, Greece"
              label='Mediterranean'
              path='/services'
              />
              <CardsItem 
              src="images/img-14.jpg"
              text="Get Blown Away by the View on Your Canoe Tour of Moraine Lake, Canada"
              label='North America'
              path='/sign-up'
              />
              <CardsItem 
              src="images/img-15.jpg"
              text="Carve out a new adventure on the Path of The Falls Trail in Brazil"
              label='South America'
              path='/sign-up'
              />   
            </ul>
          </div>
        </div>
      </div>
  );
}

export default CardsProduct;
