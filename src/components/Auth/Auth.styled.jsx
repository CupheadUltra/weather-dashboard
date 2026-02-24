import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(3px);
`;
export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 40px;
  border-radius: 20px;
  position: relative;
  width: 90%;
  max-width: 400px;
  border: 1px solid ${(props) => props.theme.headerBorder};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  z-index: 2001;
  transition: background-color 0.3s ease;
  h2 {
    margin-top: 0;
    text-align: center;
    color: ${(props) => props.theme.text};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  label {
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.text};
  }

  input {
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.headerBorder};
    background-color: ${(props) =>
      props.theme.body === "#121212" ? "#2a2a2a" : "#fff"};
    color: ${(props) => props.theme.text};
    font-size: 16px;
    outline: none;

    &:focus {
      border-color: #ffb366;
    }

    &::placeholder {
      color: ${(props) => props.theme.text};
      opacity: 0.4;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #ffb366;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 10px;

  &:hover {
    background-color: #ffa040;
  }
`;

export const SwitchText = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  span {
    color: #ffb366;
    cursor: pointer;
    font-weight: 600;
    margin-left: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
