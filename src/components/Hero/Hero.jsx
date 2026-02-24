import React, { useState } from "react";
import {
  HeroSection,
  Title,
  InfoContainer,
  InfoText,
  Divider,
  DateBlock,
  SearchWrapper,
} from "./Hero.styled";

import bgImg from "../../imgs/hero-bg.png";

const Hero = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const now = new Date();
  const monthYear = now.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  const day = now.getDate();

  const getSuffix = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const handleSearch = () => {
    if (onSearch && query.trim()) {
      onSearch(query);
    }
  };

  return (
    <HeroSection $bg={bgImg}>
      <Title>Weather dashboard</Title>

      <InfoContainer>
        <InfoText>
          Create your personal list of favorite cities and always be aware of
          the weather.
        </InfoText>

        <Divider />

        <DateBlock>
          {monthYear}
          <span>
            {weekday}, {day}
            <sup>{getSuffix(day)}</sup>
          </span>
        </DateBlock>
      </InfoContainer>

      <SearchWrapper>
        <input
          type="text"
          placeholder="Search location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button type="button" onClick={handleSearch}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2.5"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </SearchWrapper>
    </HeroSection>
  );
};

export default Hero;
