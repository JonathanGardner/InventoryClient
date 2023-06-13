// /client/src/components/Page.js

import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';


function Page({ component: Component }) {
  return (
    <div>
      <Header />
      
      <Component />

      <Footer />
    </div>


  );
}

export default Page;