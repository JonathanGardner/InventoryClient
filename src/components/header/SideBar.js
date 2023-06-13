import React, { useState, useEffect  } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuIcon from "../../images/menuIcon.png";

const SideBarContainer = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  width: 20%;
  height: calc(100% - 50px);
  background-color: #EFF2F4 !important;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  opacity: ${({ open }) => open ? '1' : '0'};
  transition: ${({ open }) => open ? 'all 0.3s ease-in-out' : 'all 0.3s ease-out'};
  margin-top: -8px;
  padding-bottom: 10px;
  z-index: 4;

  @media (max-width: 1100px) {
    width: 30%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;


const Overlay = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  transition: ${({ open }) => open ? 'all 0.3s ease-in-out' : 'all 0.3s ease-out'};
  opacity: ${({ open }) => open ? '1' : '0'};
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  margin-top: -10px;
  padding-bottom: 10px;
  cursor: pointer;
`;
const Button = styled.button`
  display: block;
  width: 80%;
  margin: 0;
  background-color: #EFF2F4 !important;
  border: none;
  padding: 0px;
  font-family: 'Roboto2', sans-serif !important;
  text-align: left;
  transition: background-color 0.3s ease-in-out;
  stroke: 0px !important;
  border-radius: 5px !important;
  box-shadow: none !important;

  &:hover {
    background-color: #C9C9C9 !important;
  }
`;

const AdminButton = styled.button`
  display: block;
  width: 80%;
  margin: 0;
  background-color: #EFF2F4 !important;
  border: none;
  padding: 0px;
  font-family: 'Roboto', sans-serif !important;
  text-align: left;
  transition: background-color 0.3s ease-in-out;
  stroke: 0px !important;
  border-radius: 5px !important;
  box-shadow: none !important;
  color: rgb(255,0,0) !important;

  &:hover {
    background-color: #C9C9C9 !important;
  }
`;

const StyledLink = styled(Link)`

  text-decoration: none;
  color: inherit;
`;

const MenuButton = styled.img`
  width: 70px;
  height: 70px;
  transition: 0.3s;
`;

const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background: none;
  background-color: #EFF2F4 !important;
  border: none;
  font-family: 'Prompt', sans-serif !important;
  font-size: 25px !important;
  border-radius: 0px !important;
`;

const LoginButtonLink = styled(Link)`
  width: calc(90%-10px);
  height: 20px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  background: none;
  align-text: center;
  background-color: #EFF2F4 !important;
  border: none;
  font-family: 'Roboto2', sans-serif !important;
  text-align: right;
  transition: background-color 0.3s ease-in-out;
  stroke: 0px !important;
  border-radius: 5px !important;
  box-shadow: none !important;
  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: #C9C9C9 !important;
  }
`;



const InnerContainer = styled.div`
    margin-top: 50px;
    margin-left: 5px;
`;


function SideBar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state variable

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []); // Check for token on component mount

  // Check for token every time 'open' changes
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [open]);

  return (
    <>
 <MenuButton src={MenuIcon} onClick={() => setOpen(true)} />
      <SideBarContainer open={open}>
        <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
        {!isLoggedIn && <LoginButtonLink to="/admin-login" onClick={() => setOpen(false)}>Login</LoginButtonLink>}
        <InnerContainer open={open}>
          <StyledLink to="/">
            <Button onClick={() => setOpen(false)}>HOME</Button>
          </StyledLink>
          <StyledLink to="/inventory">
            <Button onClick={() => setOpen(false)}>INVENTORY</Button>
          </StyledLink>
          <StyledLink to="/services-parts">
            <Button onClick={() => setOpen(false)}>SERVICES</Button>
          </StyledLink>
          <StyledLink to="/contact-us">
            <Button onClick={() => setOpen(false)}>CONTACT US</Button>
          </StyledLink>
          {isLoggedIn && (
            <StyledLink to="/admin-panel"> {/* Update with the actual route */}
              <AdminButton onClick={() => setOpen(false)}>ADD INVENTORY</AdminButton> {/* Only shows if logged in */}
            </StyledLink>
          )}
        </InnerContainer>
      </SideBarContainer>
      <Overlay open={open} onClick={() => setOpen(false)} />
    </>
  );
}

export default SideBar;