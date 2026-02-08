import React from "react";
import logo from "../../imgs/logoForecast.svg";
// Імпортуй свої іконки соцмереж
import insta from "../../imgs/insta.png";
import fb from "../../imgs/face.png";
import wa from "../../imgs/whatsapp.png";

import {
  StyledFooter,
  FooterContainer,
  FooterLogo,
  FooterInfoBlock,
  FooterTitle,
  FooterText,
  SocialWrapper,
  SocialIcon,
} from "../Footer/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterLogo>
          <img src={logo} alt="24/7 forecast" />
        </FooterLogo>
        <FooterInfoBlock className="address-block">
          <FooterTitle>Address</FooterTitle>
          <FooterText>Svobody str. 35</FooterText>
          <FooterText>Kyiv</FooterText>
          <FooterText>Ukraine</FooterText>
        </FooterInfoBlock>

        <FooterInfoBlock>
          <FooterTitle>Contact us</FooterTitle>
          <SocialWrapper>
            <SocialIcon href="#">
              <img src={insta} alt="Instagram" />
            </SocialIcon>
            <SocialIcon href="#">
              <img src={fb} alt="Facebook" />
            </SocialIcon>
            <SocialIcon href="#">
              <img src={wa} alt="WhatsApp" />
            </SocialIcon>
          </SocialWrapper>
        </FooterInfoBlock>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
