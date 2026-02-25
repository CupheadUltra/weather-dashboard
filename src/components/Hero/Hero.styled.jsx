import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 80px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.$bg}) no-repeat center center;
  background-size: cover;
  min-height: 80vh;
  width: 100%;
  color: white;
  font-family: "Montserrat Alternates", sans-serif;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 52px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
  width: 100%;
  max-width: 700px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

export const InfoText = styled.p`
  flex: 1.2;
  font-size: 18px;
  line-height: 1.5;
  text-align: right;
  margin: 0;

  @media (max-width: 900px) {
    text-align: center;
    font-size: 16px;
    max-width: 400px;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 90px;
  background-color: white;
  flex-shrink: 0;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const DateBlock = styled.div`
  flex: 1;
  font-size: 18px;
  text-align: left;

  span {
    display: block;
    font-size: 20px;
    font-weight: 700;
    margin-top: 8px;
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 550px;
  height: 55px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  overflow: hidden;
  background-color: white; /* Чіткий фон для інпуту */

  input {
    flex: 1;
    padding: 0 15px; /* Менший паддінг для мобілки */
    border: none;
    font-size: 16px; /* Оптимально для мобільних */
    background-color: transparent;
    outline: none;
    color: #000;

    @media (min-width: 900px) {
      padding: 0 25px;
      font-size: 18px;
    }
  }

  button {
    background-color: #ffb366;
    border: none;
    min-width: 60px; /* Фіксована ширина кнопки, щоб лупа не тікала */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    svg {
      width: 28px; /* Робимо лупу трохи більшою */
      height: 28px;
      stroke-width: 2.5; /* Робимо лінії товстішими для видимості */
    }
  }
`;

