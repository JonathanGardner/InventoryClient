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
  align-items: left;
  color: ${props => props.textColor};
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const ContactPhoneEmail = styled.div`
  background-color: rgba(226, 226, 226, 0);
  display: flex;
  justify-content: left;
  align-items: left;
  padding: 0px 0%;
  width: 100%;
  margin-left: 5%;
  top: 0;
  z-index: 1;
`;

const Span = styled.span`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-left: 3%;
  margin-right: 0%;
  margin-bottom: 4%;
  margin-top: 1%;
`;

const Span2 = styled.span`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-left: -2%;
  margin-right: 1%;
  margin-bottom: 0%;
  margin-top: 1%;
`;

const A = styled.a`
  color: #FFFFFF;
  text-decoration: none;
`;

function ContactUs({color = '#ffffff', textColor = '#ffffff'}) {
    return (
    <Container color={color}>
        <Map>
            <iframe loading="lazy" src="https://maps.google.com/maps?q=Golf%20Jersey%20Unlimited%&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="1882 US-9, Cape May Court House, NJ 08210" height ='300px' width = '100%' ></iframe>
        </Map>
        <Info textColor={textColor}>
            <Span>
                 <h1>CONTACT US</h1>
                 <p>ADDRESS: 1882 US-9, Cape May Court House, NJ 08210</p>
                 <p>EMAILS: sales@golfcarsunlimited.com, info@golfcarsunlimited.com, services@golfcarsunlimited.com</p>
            </Span>
           

            <ContactPhoneEmail>
                <Span2>
                    <Icon className="icon" src={phoneIcon} alt="Phone"/>
                    <A href="tel:6096240400">(609) 624-0400</A>
                </Span2>
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

export default ContactUs;
