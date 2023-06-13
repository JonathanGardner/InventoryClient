import React from 'react';
import QuickLinks from './QuickLinks'; // Adjust this import path to where your QuickLinks file is located
import PartsImage from '../../images/Parts.jpg';
import LEDImage from '../../images/twoTomberlins.png';
import tomImage from '../../images/blueBintelli.png';



const QuickV1 = () => {
  const links = [
    {
      title: 'SERVICE AND PARTS',
      image: PartsImage,
      buttonText: "GET SERVICE",
      link: "/services-parts",
    },
    {
      title: 'INVENTORY',
      image: LEDImage,
      buttonText: "VIEW",
      link: "/inventory",
    },
    {
      title: 'BRANDS',
      image: tomImage,
      buttonText: "VIEW BRANDS",
      link: "/services-parts",
    }
  ];

  return (
    <div>
      <QuickLinks links={links} />
    </div>
  );
};

export default QuickV1;
