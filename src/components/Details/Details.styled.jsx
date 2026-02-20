import styled from 'styled-components';

export const DetailsSection = styled.section`
  background-color: #f2f2f2;
  padding: 20px 15px; /* Менші падінги для мобілки */
  border-radius: 24px;
  margin: 10px 0;
  font-family: 'Montserrat Alternates', sans-serif;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  
  /* Планшет: 2 в ряд */
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Мобілка (image_242215.png): СТРОГО 1 в ряд */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const DetailCard = styled.div`
  background-color: #e6e6e6;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .label {
    font-size: 13px;
    color: #666;
    margin-bottom: 8px;
  }

  .value {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
    color: #333;
  }

  svg, img {
    margin-top: auto;
  }
`;

export const ChartContainer = styled.div`
  background: #e6e6e6;
  padding: 15px;
  border-radius: 20px;
  margin-top: 20px;
  
  h3 { 
    margin-bottom: 15px; 
    font-size: 16px; 
    color: #333; 
    text-align: center;
  }

  /* Для графіку на мобілці (image_24225a.png) */
  .recharts-responsive-container {
    margin-left: -10px; /* Трохи розширюємо графік */
  }
`;

export const ForecastList = styled.div`
  background: #e6e6e6;
  padding: 15px;
  border-radius: 20px;
  margin-top: 20px;

  h3 { 
    margin-bottom: 15px; 
    font-size: 16px; 
    color: #333; 
    text-align: center;
  }

  /* Контейнер для карток тижневого прогнозу на мобілці (image_242279.png) */
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 480px) {
    /* Якщо хочеш як на скріні 242279 - дві маленькі картки в ряд або одна велика */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ForecastItem = styled.div`
  display: flex;
  flex-direction: column; /* Вертикальний вигляд для мобільної картки */
  align-items: center;
  padding: 15px;
  background: #d9d9d9;
  border-radius: 15px;
  font-size: 14px;
  text-align: center;

  .date { 
    font-weight: 500; 
    margin-bottom: 10px;
  }

  .icon { 
    margin: 10px 0;
    img { width: 40px; } 
  }

  .temp { 
    font-weight: 700; 
    font-size: 15px;
    margin-bottom: 5px;
  }

  .desc { 
    font-size: 12px;
    color: #555; 
  }

  /* На десктопі повертаємо в рядок */
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    .date, .temp, .desc { margin-bottom: 0; }
  }
`;