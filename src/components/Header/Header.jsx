import React from 'react';
import logo from '../../imgs/logoForecast.svg';
import userIcon from '../../imgs/userlogin.png'; 
import { 
  StyledHeader, 
  LogoWrapper, 
  NavList, 
  NavItem, 
  ActionsWrapper, 
  SignUpButton, 
  UserAvatar 
} from '../../components/Header/Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <img src={logo} alt="24/7 forecast" />
      </LogoWrapper>
      
      <NavList>
        <NavItem>Who we are</NavItem>
        <NavItem>Contacts</NavItem>
        <NavItem>Menu</NavItem>
      </NavList>

      <ActionsWrapper>
        <SignUpButton>Sign Up</SignUpButton>
        <UserAvatar>
          <img src={userIcon} alt="user" />
        </UserAvatar>
      </ActionsWrapper>
    </StyledHeader>
  );
};

export default Header;