import React from 'react';
import './HomePage.css';
import TitleBar from './TitleBar';
import VisitUs from '../../components/contact/VisitUs'
import Quick from '../../components/quickLinks/QuickV1'
import Testimonials from '../../components/testimonials/Testimonials'
import About from './About'
import InstaFeed from '../../components/social/InstaFeed';

function HomePage() {
  return (
    <div>
      <TitleBar />
      <p style={{fontSize: '50px'}}>MOST LIKED IN INVENTORY</p>
      <Quick />
      <About />
      <p style={{fontSize: '50px'}}>NEW ARRIVALS</p>
      <Testimonials />

      <InstaFeed/>
      <VisitUs color='#EFF2F4' textColor = '#000000' />
    </div>
  );
}



export default HomePage;
