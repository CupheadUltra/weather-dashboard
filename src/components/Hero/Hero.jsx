import React from 'react';
// Імпортуємо твою іконку пошуку
import searchIcon from '../../imgs/hero-search.png'; 

import { 
  HeroSection, HeroTitle, InfoContainer, InfoText, 
  Divider, DateWrapper, DateText, SearchBar, 
  SearchInput, SearchButton 
} from '../Hero/Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle>Weather dashboard</HeroTitle>
      
      <InfoContainer>
        <InfoText>
          Create your personal list of favorite cities and always be aware of the weather.
        </InfoText>
        
        <Divider />
        
        <DateWrapper>
          <DateText>
            October 2023
            <span>Friday, 13th</span>
          </DateText>
        </DateWrapper>
      </InfoContainer>

      <SearchBar>
        <SearchInput type="text" placeholder="Search location..." />
        <SearchButton>
          {/* Використовуємо твою іконку */}
          <img src={searchIcon} alt="Search" />
        </SearchButton>
      </SearchBar>
    </HeroSection>
  );
};

export default Hero;