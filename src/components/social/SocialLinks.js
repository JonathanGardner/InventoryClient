import React from "react";
import InstagramImage from '../../images/instagram.png';
import FacebookImage from '../../images/facebook.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 0%;
`;

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  padding-top: 3px;
`;

const SocialText = styled.span`
  font-size: 20px;
  color: white;
  position: absolute !important;
  text-shadow: 0px 0px 10px #000000;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 1500px) {
    display: none;
  }
`;

function SocialLinks() {
    const instaLink = "https://www.instagram.com/golfcarsunlimitedllc";
    const facebookLink = "https://www.facebook.com/golfcarsunlimitedllc"
    return(
        <SocialLinksContainer>
            <a href={instaLink} target="_blank" rel="noopener noreferrer">
                <SocialIcon src={InstagramImage} alt="Instagram" />
            </a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <SocialIcon src={FacebookImage} alt="Facebook" />
            </a>
            <a href={instaLink}>
                <SocialText>@golfcarsunlimitedllc</SocialText>
            </a>
        </SocialLinksContainer>
    );
}

export default SocialLinks;
