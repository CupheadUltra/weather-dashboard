import styled from "styled-components";

export const DetailsSection = styled.section`
  padding: 40px;
  border-radius: 35px;
  margin-top: 40px;
  background: ${(props) =>
    props.theme.body === "#121212" ? "#1e1e1e" : "#fff"};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.headerBorder};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 0 10px;
  }
`;

export const DetailCard = styled.div`
  background: ${(props) =>
    props.theme.body === "#121212" ? "#2a2a2a" : "#f5f5f5"};
  padding: 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  .label {
    font-size: 14px;
    opacity: 0.7;
    margin: 0;
  }

  .value {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
  @media (max-width: 320px) {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ChartContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: ${(props) =>
    props.theme.body === "#121212"
      ? "rgba(255,255,255,0.03)"
      : "rgba(0,0,0,0.02)"};
  border-radius: 25px;

  h3 {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

export const ForecastList = styled.div`
  margin-top: 40px;

  h3 {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

export const ForecastItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  margin-bottom: 10px;
  background: ${(props) =>
    props.theme.body === "#121212" ? "#2a2a2a" : "#f9f9f9"};
  border-radius: 20px;
  transition: background 0.2s;

  &:hover {
    background: ${(props) =>
      props.theme.body === "#121212" ? "#333" : "#f0f0f0"};
  }

  .date {
    font-weight: 600;
    width: 100px;
  }

  .temp {
    font-size: 18px;
    font-weight: 700;
    color: #ffb366;
  }

  .desc {
    text-transform: capitalize;
    font-size: 14px;
    width: 120px;
    text-align: right;
  }

  @media (max-width: 500px) {
    padding: 10px 15px;
    .date {
      width: 70px;
      font-size: 13px;
    }
    .desc {
      display: none;
    }
  }
`;
