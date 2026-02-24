import React from "react";
import { IoSunny, IoCloudy, IoSnow, IoHeart, IoHeartOutline, IoSearchOutline } from "react-icons/io5";
import refreshImg from "../../imgs/cards-refresh.png";
import trashImg from "../../imgs/cards-delete.png";

// Переконайся, що ці назви точно збігаються з тим, що в Cards.styled.js
import {
  CardsGrid,
  EmptyState,
  CardWrapper,
  CardTop,
  TimeText,
  DateLine,
  MainIcon,
  TempValue,
  CardActions,
  ActionIcon,
  MoreBtn
} from "./Cards.styled";

const SingleCard = ({ data, onDelete, onSeeMore, onToggleFavorite }) => {
  const temp = Math.round(data.main?.temp || 0);
  const now = new Date();
  const numericDate = now.toLocaleDateString("uk-UA").replace(/\//g, ".");
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });

  const renderWeatherIcon = () => {
    const size = 100;
    if (temp >= 25) return <IoSunny size={size} color="#FFB366" />;
    if (temp >= 10) return <IoCloudy size={size} color="#888" />;
    return <IoSnow size={size} color="#AED6F1" />;
  };

  return (
    <CardWrapper>
      <CardTop>
        <span>{data.name}</span>
        <span>{data.sys?.country}</span>
      </CardTop>
      
      <TimeText>{data.addedAt || "00:00"}</TimeText>
      <DateLine>
        {numericDate} <span>|</span> {weekday}
      </DateLine>

      <MainIcon>{renderWeatherIcon()}</MainIcon>
      <TempValue>{temp}°C</TempValue>

      <CardActions>
        <ActionIcon title="Refresh">
          <img src={refreshImg} alt="refresh" />
        </ActionIcon>

        <ActionIcon onClick={() => onToggleFavorite(data.id)}>
          {data.isFavorite ? <IoHeart size={24} color="#ff4d4d" /> : <IoHeartOutline size={24} />}
        </ActionIcon>

        <MoreBtn onClick={() => onSeeMore(data)}>See more</MoreBtn>

        <ActionIcon onClick={() => onDelete(data.id)}>
          <img src={trashImg} alt="delete" />
        </ActionIcon>
      </CardActions>
    </CardWrapper>
  );
};

// ОСНОВНИЙ КОМПОНЕНТ
const Cards = ({ weatherList, onDelete, onSeeMore, onToggleFavorite }) => {
  const isEmpty = !weatherList || weatherList.length === 0;

  return (
    <CardsGrid $isEmpty={isEmpty}>
      {isEmpty ? (
        <EmptyState>
          <IoSearchOutline size={50} />
          <p>No cities added yet. Search for a city to see the weather!</p>
        </EmptyState>
      ) : (
        weatherList.map((city) => (
          <SingleCard
            key={city.id}
            data={city}
            onDelete={onDelete}
            onSeeMore={onSeeMore}
            onToggleFavorite={onToggleFavorite}
          />
        ))
      )}
    </CardsGrid>
  );
};

// ДУЖЕ ВАЖЛИВО: Тільки один default export
export default Cards;