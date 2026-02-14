import styled from "styled-components";
import bgImage from "../../imgs/hero-bg.png";

export const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${bgImage});
  background-size: cover;
  background-position: center;
  padding: 60px 50px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  justify-content: center;
`;

export const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 44px;
  margin-bottom: 40px;
  text-transform: capitalize;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
  width: 100%;
  max-width: 900px;
`;

export const InfoText = styled.p`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  text-align: right;
  flex: 1;
`;

export const Divider = styled.div`
  width: 2px;
  height: 80px;
  background-color: #ffffff;
`;

export const DateWrapper = styled.div`
  flex: 1;
  text-align: left;
`;

export const DateText = styled.div`
  font-weight: 300;
  font-size: 22px;

  span {
    display: block;
    font-weight: 600;
    font-size: 26px;
    margin-top: 5px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 550px;
  background-color: rgba(230, 230, 230, 0.9);
  border-radius: 12px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 15px 25px;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 400;
  font-size: 16px;
  outline: none;
  color: #333;
`;

export const SearchButton = styled.button`
  background-color: #ffb366;
  border: none;
  padding: 0 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
