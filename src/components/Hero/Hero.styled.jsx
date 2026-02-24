import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%); /* Центрування відносно всього екрану */
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.$bg}) no-repeat center center;
  background-size: cover;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 800px;
`;
export const InfoText = styled.p`
  font-size: 18px;
  text-align: right;
  flex: 1;
`;
export const Divider = styled.div`
  width: 2px;
  height: 80px;
  background: white;
`;
export const DateBlock = styled.div`
  font-size: 18px;
  flex: 1;
  span {
    display: block;
    font-weight: bold;
  }
`;
export const SearchWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  input {
    flex: 1;
    padding: 15px;
    border: none;
    outline: none;
  }
  button {
    background: #ffb366;
    border: none;
    padding: 0 20px;
    cursor: pointer;
  }
`;
