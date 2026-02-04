import styled from 'styled-components';

export const CardsGrid = styled.section`
  display: flex;
  justify-content: center; // Центруємо групу карток
  gap: 40px; // Збільшуємо простір між картками
  padding: 50px 0;
  width: 100%;
`;

export const CardWrapper = styled.div`
  background-color: #EBEBEB;
  border-radius: 35px;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat Alternates", sans-serif;
  color: #000;
  
  /* Обмежуємо ширину, щоб вони стали вужчими */
  width: 280px; 
  min-height: 450px;
  
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 15px;
  padding: 0 5px;
`;

export const TimeText = styled.h2`
  font-size: 42px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const ForecastToggle = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
`;

export const ToggleBtn = styled.button`
  background-color: #FFB366;
  border: none;
  padding: 6px 10px;
  border-radius: 12px;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
`;

export const DateRow = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 25px;
  span { margin: 0 5px; }
`;

export const WeatherIcon = styled.div`
  margin-bottom: 15px;
  img {
    width: 100px;
    height: auto;
  }
`;

export const TempText = styled.div`
  font-size: 56px;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 0 5px;
`;

export const FooterIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const SeeMoreBtn = styled.button`
  background-color: #FFB366;
  border: none;
  padding: 8px 18px;
  border-radius: 12px;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
`;