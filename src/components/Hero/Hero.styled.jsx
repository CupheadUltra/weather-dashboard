import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 80px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$bg}) no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  color: white;
  font-family: "Montserrat Alternates", sans-serif;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 50px;
  text-align: center;
  @media (min-width: 1200px) {
    font-size: 48px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  width: 100%;
  max-width: 800px;
`;

export const InfoText = styled.p`
  flex: 1;
  font-size: 16px;
  line-height: 1.4;
  text-align: right;
  margin: 0;
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Divider = styled.div`
  width: 3px;
  height: 100px;
  background-color: white;
  flex-shrink: 0;
`;

export const DateBlock = styled.div`
  flex: 1;
  font-size: 16px;
  text-align: left;
  span {
    display: block;
    font-size: 18px;
    font-weight: 700;
    margin-top: 5px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    span {
      font-size: 24px;
    }
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  height: 50px;

  input {
    flex: 1;
    padding: 0 20px;
    border: none;
    border-radius: 15px 0 0 15px;
    font-size: 16px;
    background-color: rgba(217, 217, 217, 0.9);
    outline: none;
    color: #000;
  }

  button {
    background-color: #ffb366;
    border: none;
    padding: 0 20px;
    border-radius: 0 15px 15px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #e69a4d;
    }
  }
`;
