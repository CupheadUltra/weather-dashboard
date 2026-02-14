import React, { useState } from 'react';
import searchIcon from '../../imgs/hero-search.png'; 

import { 
  HeroSection, HeroTitle, InfoContainer, InfoText, 
  Divider, DateWrapper, DateText, SearchBar, 
  SearchInput, SearchButton 
} from '../Hero/Hero.styled';

const Hero = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');   
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