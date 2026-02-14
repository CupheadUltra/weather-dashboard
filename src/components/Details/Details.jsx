import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

import { 
  WiThermometer, WiHumidity, WiBarometer, WiStrongWind 
} from "react-icons/wi";
import { MdVisibility, MdTimeline } from "react-icons/md";

import { 
  DetailsSection, DetailsGrid, DetailCard, 
  ChartContainer, ForecastList, ForecastItem 
} from './Details.styled';

const Details = ({ data }) => {
  if (!data || !data.forecast) return null;

  const chartData = data.forecast.slice(0, 8).map(item => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit' }),
    temp: Math.round(item.main.temp),
  }));

  const dailyForecast = data.forecast.filter(item => item.dt_txt.includes("12:00:00"));

  return (
    <DetailsSection>
      <DetailsGrid>
        <DetailCard>
          <p className="label">Feels like</p>
          <p className="value">{Math.round(data.main.feels_like)}°C</p>
          <WiThermometer size={40} color="#ff8c00" />
        </DetailCard>

        <DetailCard>
          <p className="label">Min / Max</p>
          <p className="value">
            {Math.round(data.main.temp_min)}° / {Math.round(data.main.temp_max)}°
          </p>
          <MdTimeline size={40} color="#555" />
        </DetailCard>

        <DetailCard>
          <p className="label">Humidity</p>
          <p className="value">{data.main.humidity}%</p>
          <WiHumidity size={40} color="#3498db" />
        </DetailCard>

        <DetailCard>
          <p className="label">Pressure</p>
          <p className="value">{data.main.pressure} hPa</p>
          <WiBarometer size={40} color="#2ecc71" />
        </DetailCard>

        <DetailCard>
          <p className="label">Wind speed</p>
          <p className="value">{data.wind.speed} m/s</p>
          <WiStrongWind size={40} color="#95a5a6" />
        </DetailCard>

        <DetailCard>
          <p className="label">Visibility</p>
          <p className="value">{(data.visibility / 1000).toFixed(1)} km</p>
          <MdVisibility size={40} color="#34495e" />
        </DetailCard>
      </DetailsGrid>

      <ChartContainer>
        <h3>Hourly forecast</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ccc" />
            <XAxis dataKey="time" axisLine={false} tickLine={false} />
            <YAxis unit="°" axisLine={false} tickLine={false} />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="temp" 
              stroke="#ff8c00" 
              fill="rgba(255, 140, 0, 0.2)" 
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>

      <ForecastList>
        <h3>5-day forecast</h3>
        {dailyForecast.map((day, index) => (
          <ForecastItem key={index}>
            <span className="date">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })}
            </span>
            <span className="icon">
               <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="icon" />
            </span>
            <span className="temp">{Math.round(day.main.temp_max)}/{Math.round(day.main.temp_min)}°C</span>
            <span className="desc">{day.weather[0].description}</span>
          </ForecastItem>
        ))}
      </ForecastList>
    </DetailsSection>
  );
};

export default Details;