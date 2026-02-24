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

  input {
    flex: 1;
    padding: 0 25px;
    border: none;
    font-size: 18px;
    background-color: rgba(230, 230, 230, 0.9);
    outline: none;
    color: #000;
    font-family: inherit;

    &::placeholder {
      color: #777;
    }
  }

  button {
    background-color: #ffb366;
    border: none;
    padding: 0 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #ffa040;
    }

    svg,
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
