import React, { useState } from "react";
import logo from "../../imgs/logoForecast.svg";
import insta from "../../imgs/insta.png";
import fb from "../../imgs/face.png";
import wa from "../../imgs/whatsapp.png";

import char1 from "../../imgs/footer-anim/lanino.png";
import char2 from "../../imgs/footer-anim/elnina.png";
import char1move from "../../imgs/footer-anim/lanino-move.gif";
import char2move from "../../imgs/footer-anim/elnina-move.gif";

import {
  StyledFooter,
  FooterContainer,
  FooterLogo,
  FooterInfoBlock,
  FooterTitle,
  FooterText,
  SocialWrapper,
  SocialIcon,
  CharactersContainer,
  CharacterImg,
} from "./Footer.styled";

const Footer = () => {
  const [isMoving, setIsMoving] = useState(false);

  const handleCharacterClick = () => {
    if (isMoving) return;
    setIsMoving(true);
    setTimeout(() => {
      setIsMoving(false);
    }, 2000);
  };

  return (
    <StyledFooter id="contacts">
      <FooterContainer>
        <FooterLogo>
          <img src={logo} alt="Logo" />
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
            <SocialIcon
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Instagram" />
            </SocialIcon>

            <SocialIcon
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="Facebook" />
            </SocialIcon>

            <SocialIcon
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={wa} alt="WhatsApp" />
            </SocialIcon>
          </SocialWrapper>
        </FooterInfoBlock>

        <CharactersContainer onClick={handleCharacterClick}>
          <CharacterImg
            src={isMoving ? char1move : char1}
            alt="Lanino"
            $mirrored
            $isMoving={isMoving}
          />
          <CharacterImg src={isMoving ? char2move : char2} alt="Elnina" />
        </CharactersContainer>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
