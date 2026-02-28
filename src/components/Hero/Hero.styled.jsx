import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.$bg}) no-repeat center center;
  background-size: cover;
  min-height: 80vh;
  width: 100%;
  color: white;
  font-family: "Montserrat Alternates", sans-serif;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 40px 15px;
    min-height: 100vh;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 320px) {
    font-size: 26px;
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 52px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 700px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    margin-bottom: 30px;
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
    font-size: 15px;
    max-width: 280px;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 80px;
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
    font-size: 16px;
    span { font-size: 18px; }
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
  background-color: white;

  @media (max-width: 320px) {
    height: 48px;
  }

  input {
    flex: 1;
    padding: 0 15px;
    border: none;
    outline: none;
    color: #000;
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 16px; 
    font-weight: 500;

    &::placeholder {
      color: #999;
      font-size: 14px;
    }

    @media (max-width: 320px) {
      padding: 0 10px;
    }
  }

  button {
    background-color: #ffb366;
    border: none;
    min-width: 55px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    transition: background-color 0.2s;

    &:hover {
      background-color: #ffa040;
    }

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;