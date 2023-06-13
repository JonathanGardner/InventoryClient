import React from 'react';
import styled from 'styled-components';
import phoneIcon from '../../images/phone-icon.png';  
import addressIcon from '../../images/address-icon.png';

const Container = styled.div`
  background-color: ${props => props.color};
  display: flex;
`;

const Map = styled.div`
  width: 50%;
`;

const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: ${props => props.textColor};

  @media (max-width: 1100px) {
    margin-left: 20px; // adjust as needed
  }
`;


const Icon = styled.img`
  margin-right: 5px;
`;


const ContactPhoneEmail = styled.div`
  background-color: rgba(226, 226, 226, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0%;
  width: 100%;
  top: 0;
  z-index: 1;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 20px; // adjust as needed
  }
`;




const Span = styled.span`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-left: 0%;
  margin-right: 1%;
  margin-bottom: 4%; 
  margin-top: 0%; 

  @media (max-width: 1100px) {
    margin-top: 1%;  // reduce these values
    margin-bottom: 1%;
  }
`;


const A = styled.a`
  color: #000000;
  text-decoration: none;
`;

function VisitUs({color = '#ffffff', textColor = '#ffffff'}) {
    return (
    <Container color={color}>
        <Map>
            <iframe loading="lazy" src="https://maps.google.com/maps?q=Golf%20Jersey%20Unlimited%&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="1882 US-9, Cape May Court House, NJ 08210" height ='300px' width = '100%' ></iframe>
        </Map>
        <Info textColor={textColor}>
            <h1>VISIT US!</h1>

            <ContactPhoneEmail>
                <Span>
                    <Icon className="icon" src={phoneIcon} alt="Phone"/>
                    <A href="tel:6096240400">(609) 624-0400</A>
                </Span>
                <Span>
                    <Icon className="icon" src={addressIcon} alt="Address"/>
                    <A 
                        href="https://www.google.com/maps/search/?api=1&query=Golf+Cars+Unlimited+1882+US-9+Cape+May+Court+House+NJ+08210"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        1882 US-9, Cape May Court House, NJ 08210
                    </A>
                </Span>
            </ContactPhoneEmail>
        </Info>
    </Container>
    );
}

export default VisitUs;
