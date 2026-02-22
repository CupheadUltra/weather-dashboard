import React from "react";
import {
  IoSunny,
  IoCloudy,
  IoSnow,
  IoHeart,
  IoHeartOutline,
} from "react-icons/io5";

import refreshImg from "../../imgs/cards-refresh.png";
import trashImg from "../../imgs/cards-delete.png";

import {
  CardsGrid,
  CardWrapper,
  CardTop,
  TimeText,
  ForecastBtns,
  DateLine,
  MainIcon,
  TempValue,
  CardActions,
  ActionIcon,
  MoreBtn,
} from "./Cards.styled";

const SingleCard = ({
  data,
  onRefresh,
  onDelete,
  onSeeMore,
  onToggleFavorite,
}) => {
  const temp = Math.round(data.main?.temp);

  const now = new Date();
  const numericDate = now.toLocaleDateString("uk-UA").replace(/\//g, ".");
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });

  const displayTime = data.addedAt || "00:00";

  const renderWeatherIcon = () => {
    const size = 110;
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

      <TimeText>{displayTime}</TimeText>

      <ForecastBtns>
        <button>Hourly forecast</button>
        <button>Weekly forecast</button>
      </ForecastBtns>

      <DateLine>
        {numericDate} <span>|</span> {weekday}
      </DateLine>

      <MainIcon>{renderWeatherIcon()}</MainIcon>

      <TempValue>{temp}°C</TempValue>

      <CardActions>
        <ActionIcon onClick={() => onRefresh(data.id, data.name)}>
          <img src={refreshImg} alt="refresh" />
        </ActionIcon>

        <ActionIcon onClick={() => onToggleFavorite(data.id)}>
          {data.isFavorite ? (
            <IoHeart size={28} color="#ff4d4d" />
          ) : (
            <IoHeartOutline size={28} color="#333" />
          )}
        </ActionIcon>

        <MoreBtn onClick={() => onSeeMore(data)}>See more</MoreBtn>

        <ActionIcon onClick={() => onDelete(data.id)}>
          <img src={trashImg} alt="delete" />
        </ActionIcon>
      </CardActions>
    </CardWrapper>
  );
};

const Cards = ({
  weatherList,
  onRefresh,
  onDelete,
  onSeeMore,
  onToggleFavorite,
}) => {
  return (
    <CardsGrid>
      {weatherList &&
        weatherList.map((city) => (
          <SingleCard
            key={city.id}
            data={city}
            onRefresh={onRefresh}
            onDelete={onDelete}
            onSeeMore={onSeeMore}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
    </CardsGrid>
  );
};

export default Cards;