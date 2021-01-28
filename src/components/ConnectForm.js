import React from 'react';
import './ConnectForm.css';

function ConnectForm() {
  const handleSubmit = event => {
   event.preventDefault();
   alert('You have submitted the form.')
 }

  return(
    <div className='forms'>
      <h1>Plan Your Experience!</h1>
      <div className="forms__container">
        <div className="forms__wrapper">
          <form className='submit__form shadow' onSubmit={handleSubmit}>
            <div>
              <label for="name">Name</label>
              <input type="text" name="name" id="name" value="" placeholder="Janice Doe" required />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" name="email" id="email" value="" placeholder="janice@email.com" required />
            </div>
            <div>
              <label for="phone">Phone Number</label>
              <input type="number" name="phone" id="phone" value="" placeholder="999.999.9999" required/>
            </div>
            <div>
              <label for="address">Address</label>
              <input type="text" name="address" id="address" value="" placeholder="1234 Main St." />
              <label for="city">City</label>
              <input type="text" name="city" id="city" value="" placeholder="Anywhere" />
              <label for="state">State</label>
              <input type="text" name="state" id="state" value="" placeholder="Ohio" />
              <label for="zipcode">ZipCode</label>
              <input type="number" name="zipcode" id="zip" value="" placeholder="12345" />
            </div>
            <div>
              <label for="referral">How Did you hear about us?</label>
              <input type="text" name="referral" id="referral" value="" placeholder="" />
            </div>
            <div class="field">
              <label for="tripReaseon">Is this trip a special occaision?</label>
              <select className='select' name="trip-reason" id="trip-reason">
                <option value="">-</option>
                <option value="1">HoneyMoon</option>
                <option value="1">Birthday</option>
                <option value="1">Anniversary</option>
                <option value="1">Graduation</option>
                <option value="1">Couples Getaway</option>
                <option value="1">Girls Getaway</option>
                <option value="1">Guys Getaway</option>
                <option value="1">Other</option>
              </select>
            </div>
            <div class="field">
              <label for="tripRegion">Which region would you like to experience?</label>
              <select className='select' name="trip-region" id="trip-region">
                <option value="">-</option>
                <option value="1">Africa</option>
                <option value="1">Austrailia</option>
                <option value="1">Europe</option>
                <option value="1">Mediterranean</option>
                <option value="1">North America</option>
                <option value="1">South America</option>
              </select>
              </div>
            <div>
              <label for="date">Date you are planning to begin</label>
              <input type="date" name="date-start" id="date" value="" placeholder="" />
            </div>
            <div class="field">
              <label for="experienceBudget">
                Travel Experience packages include accommodations, private vs. group tours and 
                private vs. public transportation, cultural experiences, and more! 
                Which of these options best fit your investment for this travel experience?
              </label>
              <select className='select' name="expereience-budget" id="expereience-budget">
                <option value="">-</option>
                <option value="1">$6-10,000 Travel Experience</option>
                <option value="1">$10-15,000 Travel Experience</option>
                <option value="1">$15-20,000 Travel Experience</option>
                <option value="1">$20-30,000 Travel Experience</option>
                <option value="1">$30,000+ Ultra Luxe Travel Experience</option>
              </select>
            </div>
            
            <input type="submit" className="submitButton" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectForm;