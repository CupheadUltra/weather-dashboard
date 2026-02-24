import React from "react";
import { useTheme } from "styled-components"; // Додаємо цей хук
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { WiThermometer, WiHumidity, WiBarometer, WiStrongWind } from "react-icons/wi";
import {
  DetailsSection, DetailsGrid, DetailCard, ChartContainer, ForecastList, ForecastItem,
} from "./Details.styled";

const Details = ({ data, onClose }) => {
  const theme = useTheme(); // Доступ до об'єкта теми (lightTheme або darkTheme)

  if (!data) return null;

  // 1. Дані для погодинного графіка (24 години)
  const chartData = data.forecast ? data.forecast.slice(0, 8).map((item) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    temp: Math.round(item.main.temp),
  })) : [];

  // 2. Логіка для щоденного прогнозу
  const dailyForecast = data.forecast ? data.forecast.filter((item) => 
    item.dt_txt.includes("12:00:00")
  ) : [];

  // Визначаємо кольори для графіка залежно від активної теми
  const axisColor = theme.text; 
  const gridColor = theme.body === "#121212" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";

  return (
    <DetailsSection>
      <button 
        onClick={onClose} 
        style={{ 
          float: 'right', 
          cursor: 'pointer', 
          background: 'none', 
          border: 'none', 
          fontSize: '24px', 
          color: theme.text // Тепер кнопка теж змінює колір
        }}
      >
        ✖
      </button>
      
      <h2 style={{ marginBottom: '30px', color: theme.text }}>Детальний прогноз: {data.name}</h2>
      
      <DetailsGrid>
        <DetailCard>
          <p className="label">Відчувається як</p>
          <p className="value">{Math.round(data.main.feels_like)}°C</p>
          <WiThermometer size={40} color="#ff8c00" />
        </DetailCard>
        <DetailCard>
          <p className="label">Вологість</p>
          <p className="value">{data.main.humidity}%</p>
          <WiHumidity size={40} color="#3498db" />
        </DetailCard>
        <DetailCard>
          <p className="label">Швидкість вітру</p>
          <p className="value">{data.wind.speed} м/с</p>
          <WiStrongWind size={40} color="#95a5a6" />
        </DetailCard>
        <DetailCard>
          <p className="label">Тиск</p>
          <p className="value">{data.main.pressure} hPa</p>
          <WiBarometer size={40} color="#2ecc71" />
        </DetailCard>
      </DetailsGrid>

      {chartData.length > 0 && (
        <ChartContainer>
          <h3 style={{ color: theme.text }}>Прогноз на найближчі 24 години</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={chartData}>
              {/* Передаємо кольори через пропси stroke */}
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
              <XAxis 
                dataKey="time" 
                stroke={axisColor} 
                tick={{ fill: axisColor, fontSize: 12 }} 
                axisLine={false} 
              />
              <YAxis 
                unit="°" 
                stroke={axisColor} 
                tick={{ fill: axisColor, fontSize: 12 }} 
                axisLine={false} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme.body === "#121212" ? "#2a2a2a" : "#fff",
                  color: theme.text,
                  border: `1px solid ${gridColor}`,
                  borderRadius: '10px'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="temp" 
                stroke="#ffb366" 
                fill="rgba(255, 179, 102, 0.2)" 
                strokeWidth={3} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      )}

      {dailyForecast.length > 0 && (
        <ForecastList>
          <h3 style={{ color: theme.text }}>Прогноз на 5-6 днів</h3>
          {dailyForecast.map((day, index) => (
            <ForecastItem key={index}>
              <span className="date">
                {new Date(day.dt * 1000).toLocaleDateString("uk-UA", { weekday: 'short', day: 'numeric', month: 'short' })}
              </span>
              <img 
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
                alt="weather icon" 
                width="50"
              />
              <span className="temp">{Math.round(day.main.temp)}°C</span>
              <span className="desc" style={{ color: theme.text, opacity: 0.8 }}>
                {day.weather[0].description}
              </span>
            </ForecastItem>
          ))}
        </ForecastList>
      )}
    </DetailsSection>
  );
};

export default Details;