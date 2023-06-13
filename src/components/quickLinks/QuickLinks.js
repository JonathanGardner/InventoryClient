import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const QuickLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
  margin-bottom: 2%
`;

const QuickLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 250px;
  background: #FFFFFF;
  padding: 15px;
  z-index: -2;

  @media (max-width: 800px) {
    height: 150px;
  }
`;

const QuickLinkImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const QuickLinkTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  color: #FFFFFF;
  margin: 0;
  position: absolute;
  text-shadow: 0px 0px 20px #000000;
  margin-top: 100px;
  z-index: 1;

  @media (max-width: 1100px) {
    font-size: 24px;
  }

  @media (max-width: 950px) {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
    margin-top: 0px;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const QuickLinkButton = styled.button`
  width: 140px;
  height: 40px;
  background: #E0A816;
  border: 5px solid #E0A816;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  position: absolute;
  text-align: center;
  margin-top: 185px;
  z-index: 1;

  @media (max-width: 800px) {
    margin-top: 90px;
  }
`;

const QuickLinks = ({ links }) => {
  return (
    <QuickLinksContainer>
      {links.map((link, index) => (
        <Link to={link.link} key={index}>
          <QuickLinkBox>
            <QuickLinkImage image={link.image} />
            <QuickLinkTitle>{link.title}</QuickLinkTitle>
            <QuickLinkButton>{link.buttonText}</QuickLinkButton>
          </QuickLinkBox>
        </Link>
      ))}
    </QuickLinksContainer> 
  );
};

export default QuickLinks;

