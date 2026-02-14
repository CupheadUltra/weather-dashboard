import React from 'react';
import { 
  CardsGrid, CardWrapper, CardHeader, TimeText, 
  ForecastToggle, ToggleBtn, DateRow, WeatherIcon, 
  TempText, CardFooter, FooterIcon, SeeMoreBtn 
} from './Cards.styled';

const SingleCard = ({ city, country, temp, time, date, day, onSeeMore }) => (
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
    <DateRow>{date} <span>|</span> {day}</DateRow>
    <WeatherIcon><span style={{fontSize: '70px'}}>☀️</span></WeatherIcon>
    <TempText>{temp}°C</TempText>
    <CardFooter>
      <FooterIcon title="Reset">⬅️</FooterIcon>
      <FooterIcon title="Like">❤️</FooterIcon>
      <SeeMoreBtn onClick={onSeeMore}>See more</SeeMoreBtn>
      <FooterIcon title="Delete">🗑️</FooterIcon>
    </CardFooter>
  </CardWrapper>
);

const Cards = ({ weatherList, onSeeMore }) => {
  return (
    <div className="container">
      <CardsGrid>
        {weatherList && weatherList.map((data) => (
          <SingleCard 
            key={data.id}
            city={data.name}
            country={data.sys?.country}
            temp={Math.round(data.main?.temp)}
            time={new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            date={new Date().toLocaleDateString()}
            day={new Date().toLocaleDateString('en-US', {weekday: 'long'})}
            onSeeMore={() => onSeeMore(data)} 
          />
        ))}
      </CardsGrid>
    </div>
  );
};

export default Cards;