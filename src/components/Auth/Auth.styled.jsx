import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(3px);
`;

export const FormContainer = styled.form`
  background: white;
  padding: 50px 40px;
  border-radius: 60px;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: "Montserrat Alternates", sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    width: 90%;
    padding: 30px 20px;
    border-radius: 40px;
  }

  h2 {
    text-align: center;
    font-size: 38px;
    margin-top: 0;
    margin-bottom: 30px;
    font-weight: 500;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
    padding-left: 10px;
  }

  input {
    width: 100%;
    padding: 18px 25px;
    border-radius: 20px;
    border: none;
    background-color: #e5e5e5;
    font-size: 16px;
    font-family: inherit;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      color: #999;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #ffb366;
  border: none;
  padding: 14px 45px;
  border-radius: 20px;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  margin-top: 15px;
  font-family: inherit;
  transition: transform 0.2s, background 0.2s;

  &:hover {
    background-color: #ffa040;
    transform: scale(1.02);
  }
`;

export const SwitchText = styled.p`
  text-align: center;
  margin-top: 25px;
  font-size: 14px;

  span {
    color: #ffb366;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 600;
    margin-left: 5px;
  }
`;
