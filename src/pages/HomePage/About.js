import React from 'react';
import styled from 'styled-components';
import Billboard from '../../images/Billboard_NoText.png';
import Logo from '../../images/logo4.png';
import SocialLinks from '../../components/social/SocialLinks';

const BillboardBackground = styled.div`
  background-image: url(${Billboard});
  background-size: cover;
  height: 550px;
  position: relative;
`;

const LogoAndTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-left: 20px;
`;

const CompanyLogo = styled.img`
  width: 200px;
  height: 200px;
`;

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MainText = styled.h1`
  position: absolute;
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  color: black;
  width: 45%;
  text-align: left;

  @media (max-width: 1800px) {
    font-size: 45px;
  }

  @media (max-width: 1600px) {
    font-size: 35px;
  }

  @media (max-width: 1300px) {
    font-size: 35px;
  }

  @media (max-width: 1100px) {
    font-size: 30px;
    width: 50%;
  }

  @media (max-width: 800px) {
    font-size: 25px;
    width: 50%;
    text-align: center;
  }
`;

const SubText = styled.h2`
  position: absolute;
  top: 220px;
  left: 3%;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: black;
  width: 50%;
  text-align: left;

  @media (max-width: 2000px) {
    font-size: 23px;
    width: 50%;
    left: 4%;
  }

  @media (max-width: 2000px) {
    font-size: 22px;
    width: 50%;
    left: 4%;
  }

  @media (max-width: 1800px) {
    font-size: 21px;
    width: 50%;
    left: 4%;
  }

  @media (max-width: 1300px) {
    font-size: 21px;
    width: 60%;
    left: 5%;
  }

  @media (max-width: 1100px) {
    text-align: left;
    font-size: 20px;
    width: 70%;
    left: 7.5%;
  }

  @media (max-width: 900px) {
    text-align: left;
    font-size: 20px;
    width: 80%;
    left: 7.5%;
  }

  @media (max-width: 800px) {
    text-align: center;
    font-size: 17px;
    width: 65%;
    left: 15%;
  }

  @media (max-width: 700px) {
    text-align: center;
    font-size: 14px;
    width: 70%;
    left: 15%;
  }
`;

const SocialLinksContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  
`;


function HomePage() {
 const words = "GOLF CARS UNLIMITED LLC IS YOUR GO-TO DESTINATION FOR BOTH STREET-LEGAL AND RECREATIONAL GOLF CARTS IN SOUTHERN NEW JERSEY. OUR DEDICATED TEAM IS COMMITTED TO PROVIDING YOU WITH A TOP-TIER EXPERIENCE, WHETHER YOU'RE EXPLORING OUR EXPANSIVE COLLECTION OF LUXURY VEHICLES IN OUR SHOWROOM, OR DESIGNING YOUR BESPOKE ORDER. LOCATED JUST A STONE'S THROW FROM THE PICTURESQUE AVALON, NEW JERSEY, OUR STREET-LEGAL GOLF CARTS ARE PRIMED FOR DELIVERY RIGHT TO YOUR DOORSTEP, READY TO INJECT STYLE INTO YOUR COASTAL ADVENTURES.";

  return (
    <BillboardBackground>
      <LogoAndTextContainer>
        <CompanyLogo src={Logo} alt="Company Logo" />
        <MainTextContainer>
          <MainText style={{ WebkitTextStroke: "8px white" }}>EMBRACE THE RIDE IN ELEGANCE WITH GOLF CARS UNLIMITED</MainText>
          <MainText>EMBRACE THE RIDE IN ELEGANCE WITH GOLF CARS UNLIMITED</MainText>
        </MainTextContainer>
      </LogoAndTextContainer>
      <SubText style={{ WebkitTextStroke: "4px white" }}>{words}</SubText>
      <SubText>{words}</SubText>
      <SocialLinksContainer>
        <SocialLinks />
      </SocialLinksContainer>
    </BillboardBackground>
  );
}

export default HomePage;
