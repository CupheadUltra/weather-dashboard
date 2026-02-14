import styled from 'styled-components';

export const DetailsSection = styled.section`
  background-color: #f2f2f2;
  padding: 40px 20px;
  border-radius: 24px;
  margin: 20px 0;
  font-family: 'Montserrat', sans-serif;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
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
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }

  .value {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const ChartContainer = styled.div`
  background: #e6e6e6;
  padding: 20px;
  border-radius: 20px;
  margin-top: 30px;
  h3 { margin-bottom: 20px; font-size: 18px; color: #333; }
`;

export const ForecastList = styled.div`
  background: #e6e6e6;
  padding: 20px;
  border-radius: 20px;
  margin-top: 30px;
  h3 { margin-bottom: 20px; font-size: 18px; color: #333; }
`;

export const ForecastItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  align-items: center;
  padding: 12px 20px;
  background: #d9d9d9;
  border-radius: 12px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;

  .temp { font-weight: bold; }
  .desc { text-align: right; color: #555; }
`;