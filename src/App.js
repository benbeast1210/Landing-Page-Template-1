import React from 'react';
import ContactCard from './ContactCard';
import VideoPlayer from './VideoPlayer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/* Title for business */}
      <h1>Your Business</h1>

      {/* This nav bar should be at the top of the page */}
      <nav>
        <ul>
          <li>Home</li>
          <li>Order Now</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* The majority of the page will be simple horizontally divided sections that are easy to understand with large text and to-the-point design*/}
      
      {/* Primary Section, targeting customer action; "place order" and "find a location" should be placed in that order one after the other, vertically */}
      <h2>Place an Order</h2>
      {/* find a way to allow order placement (API?)*/}
      <div id="OrderTool"></div>

      {/* Secondary Section will focus on customer engagement and interaction, targeting impressions by using social media and promo videos*/}
      <div id='Video_SocialMedia'>
        {/* <VideoPlayer /> */}
      </div>

      {/* This footer will contain useful links for reviews, referrals, Careers, locations, contact cards, menu, etc. */}
      <footer>
        <ContactCard />
      </footer>
    </div>
  );
}

export default App;
