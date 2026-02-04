import React from 'react';
/* Імпортуй свої іконки тут */
// import sunImg from '../../imgs/sun.png';
// import endIcon from '../../imgs/end-arrow.svg'; 
// import heartIcon from '../../imgs/heart-red.svg';
// import trashIcon from '../../imgs/trash-bin.svg';

import { 
  CardsGrid, CardWrapper, CardHeader, TimeText, 
  ForecastToggle, ToggleBtn, DateRow, WeatherIcon, 
  TempText, CardFooter, FooterIcon, SeeMoreBtn 
} from '../Cards/Cards.styled';

const SingleCard = ({ city, country, temp, time, date, day }) => (
  <CardWrapper>
    <CardHeader>
      <span>{city}</span>
      <span>{country}</span>
    </CardHeader>

    <TimeText>{time}</TimeText>

    <ForecastToggle>
      <ToggleBtn>Hourly forecast</ToggleBtn>
      <ToggleBtn>Weekly forecast</ToggleBtn>
    </ForecastToggle>

    <DateRow>
      {date} <span>|</span> {day}
    </DateRow>

    <WeatherIcon>
      {/* <img src={sunImg} alt="sun" /> */}
      <span style={{fontSize: '70px'}}>☀️</span>
    </WeatherIcon>

    <TempText>{temp}°C</TempText>

    <CardFooter>
      <FooterIcon title="Reset">
        {/* <img src={endIcon} alt="end" /> */}
        ⬅️
      </FooterIcon>
      
      <FooterIcon title="Like">
        {/* <img src={heartIcon} alt="heart" /> */}
        ❤️
      </FooterIcon>
      
      <SeeMoreBtn>See more</SeeMoreBtn>
      
      <FooterIcon title="Delete">
        {/* <img src={trashIcon} alt="delete" /> */}
        🗑️
      </FooterIcon>
    </CardFooter>
  </CardWrapper>
);

const Cards = () => {
  return (
    <div className="container">
      <CardsGrid>
        <SingleCard city="Prague" country="Czech Republic" temp="22" time="14:00" date="13.10.2023" day="Friday" />
        <SingleCard city="Prague" country="Czech Republic" temp="22" time="14:00" date="13.10.2023" day="Friday" />
        <SingleCard city="Prague" country="Czech Republic" temp="22" time="14:00" date="13.10.2023" day="Friday" />
      </CardsGrid>
    </div>
  );
};

export default Cards;