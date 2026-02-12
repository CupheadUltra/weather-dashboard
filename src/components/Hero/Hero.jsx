import React, { useState } from 'react';
import searchIcon from '../../imgs/hero-search.png'; 

import { 
  HeroSection, HeroTitle, InfoContainer, InfoText, 
  Divider, DateWrapper, DateText, SearchBar, 
  SearchInput, SearchButton 
} from '../Hero/Hero.styled';

const Hero = ({ onSearch }) => {
  // 1. Створюємо локальний стан для інпуту
  const [query, setQuery] = useState('');

  // 2. Обробник натискання кнопки або Enter
  const handleSearchClick = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); // Викликаємо функцію, яку ми передали з App.js
      setQuery('');    // Очищуємо поле після кліку
    }
  };

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

      {/* 3. Огортаємо в тег form, щоб пошук працював і по натисканню Enter */}
      <SearchBar as="form" onSubmit={handleSearchClick}>
        <SearchInput 
          type="text" 
          placeholder="Search location..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton type="submit">
          <img src={searchIcon} alt="Search" />
        </SearchButton>
      </SearchBar>
    </HeroSection>
  );
};

export default Hero;