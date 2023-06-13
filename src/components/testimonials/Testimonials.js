import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';  // Make sure you're using the right Link component
import FancyButton from '../buttons/FancyButton/FancyButton.js';  // Import your FancyButton component
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import Rating from './Rating';  // Import Rating component

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 0px auto;
  padding: 0px;
  text-align: center;
  width: 80%;
  background-color: transparent; 
  margin-top: 1%;
`;

const Title = styled.h2`
  font-size: 40px;
  margin: 0;
  color: #000;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  color: #000;
  margin 0;
  font-weight: normal;
`;

const ReviewText = styled.p`
  font-size: 16px;
  color: #000;
  font-style: italic;
  font-weight: normal;
`;

const ReviewerName = styled.p`
  font-size: 24px;
  color: #fcbf00;
  margin-bottom: 2%;
  margin-top: 0;
`;

const Button = styled.button`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 5px;
  border: none;
  border-radius: 50%;
  background-color: #999999;
  cursor: pointer;

  &:disabled {
    background-color: #fcbf00;
  }
`;

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
`;


const CustomProperties1 = styled.div`
  display: flex;            // This makes the contents of the component flexible
  justify-content: center;  // This centers the contents horizontally
  margin: 0;
  margin-top: 2.25%;
  height: 10%;
`;


const GoogleReviews = () => {
  const reviews = [
    {
      text: "'The owner was very helpful and friendly despite us interrupting his lunch. The carts are currently in high demand but we did manage to get a new cart at a reasonable price. Offered to deliver same day, but we weren't able to get our insurance policy in place. Would recommend this place to others.'",
      name: "Wayne H",
      rating: 5
    },
    {
      text: "'Great place to shop for golf carts! Very good quality carts (LSV) being sold & great selection! Very friendy, helpful, & knowledgeable staff! Very pleasing showroom with a whole array of accessories to trick your cart out (if you feel the need). New cart look amazing & needs nothing to amplify it's beauty!'",
      name: "Robert B",
      rating: 5
    },
    {
      text: "'The staff here are phenomenal! Very knowledgeable, kind, and hard-working.  I felt like they will go above and beyond to ensure a satisfied customer.  I am absolutely beyond IMPRESSED by the selection of low-speed vehicles! I cannot believe how many choices I had! Needless to say, we went home ecstatic and excited for our delivery! Thank you Golf Cars Unlimited!!!'",
      name: "Krista A",
      rating: 5
    },
    {
      text: "'There aren't many individuals or businesses out there that go above and beyond to help others or to do the right thing. Jim and his team are exactly that. Highly professional, friendly, caring, and extremely knowledgeable. I would highly recommend Jim and his business to anyone.'",
      name: "Kristin M",
      rating: 5
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setCurrentReviewIndex(index);
  };

  return (
    <Wrapper>
      <Title>WHAT ARE CUSTOMERS ARE SAYING</Title>
      <Subtitle>Golf Cars Unlimited | Testimonials</Subtitle>
      <SwipeableViews
        index={currentReviewIndex}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        {reviews.map((review, index) => (
          <div key={index}>
            <ReviewText>{review.text}</ReviewText>
            <Rating rating={review.rating} />
            <ReviewerName>{review.name}</ReviewerName>
          </div>
        ))}
      </SwipeableViews>
      <DotWrapper>
        {reviews.map((_, index) => (
          <Button
            key={index}
            disabled={currentReviewIndex === index}
            onClick={() => setCurrentReviewIndex(index)}
          />
        ))}
      </DotWrapper>
      <CustomProperties1>
        <Link to="https://search.google.com/local/reviews?placeid=ChIJE7WNkbK6wIkRcUFWWA5uCPs&q=Golf+Jersey+Unlimited%25&hl=en&gl=US">
          <FancyButton buttonText="VIEW ALL" />
        </Link>
      </CustomProperties1>
    </Wrapper>
  );
};

export default GoogleReviews;
