import React, { useState } from "react";
// Імпорти логотипу та соцмереж (переконайся, що шляхи правильні)
import logo from "../../imgs/logoForecast.svg";
import insta from "../../imgs/insta.png";
import fb from "../../imgs/face.png";
import wa from "../../imgs/whatsapp.png";

// Статичні персонажі
import char1 from "../../imgs/footer-anim/lanino.png";
import char2 from "../../imgs/footer-anim/elnina.png";
// Гіфки анімації
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

    // Зміни 2000 на тривалість твоєї гіфки в мілісекундах
    setTimeout(() => {
      setIsMoving(false);
    }, 2000);
  };

  return (
    <StyledFooter>
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
