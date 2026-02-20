import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6); /* Затемнення фону */
  display: flex;
  align-items: center;      /* Центрування по вертикалі */
  justify-content: center;   /* Центрування по горизонталі */
  z-index: 9999;            /* Максимальний пріоритет */
  backdrop-filter: blur(3px); /* Легке розмиття заднього плану */
`;

export const FormContainer = styled.form`
  background: white;
  padding: 50px 40px;
  border-radius: 60px;      /* Ті самі закруглені кути з макета */
  width: 100%;
  max-width: 450px;         /* Обмежуємо ширину на комп'ютері */
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: 'Montserrat Alternates', sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);

  /* Адаптація для мобілки */
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
    background-color: #E5E5E5; /* Сірий фон інпутів з макета */
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
  background-color: #FFB366; /* Твій помаранчевий */
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
    color: #FFB366;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 600;
    margin-left: 5px;
  }
`;