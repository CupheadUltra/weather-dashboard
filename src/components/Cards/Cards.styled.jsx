import styled from "styled-components";

export const CardsGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  padding: ${(props) => (props.$isEmpty ? "20px 0" : "40px 20px")};
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  box-sizing: border-box;
  transition: padding 0.3s ease;

  @media (max-width: 1024px) {
    gap: 20px;
    padding: ${(props) => (props.$isEmpty ? "10px 0" : "20px 10px")};
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  color: #aaa;
  font-family: inherit;

  p {
    margin-top: 15px;
    font-size: 16px;
    font-weight: 500;
    max-width: 300px;
    line-height: 1.5;
  }
`;

export const CardWrapper = styled.div`
  /* Адаптація під тему: у темній темі робимо темнішим */
  background: ${(props) => (props.theme.body === "#121212" ? "#1e1e1e" : "#ebebeb")};
  border-radius: 35px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 280px;
  border: 1px solid ${(props) => props.theme.headerBorder};

  @media (max-width: 900px) {
    width: calc(50% - 15px);
    min-width: 280px;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 320px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  color: ${(props) => props.theme.text};
  margin-bottom: 5px;

  span:last-child {
    opacity: 0.7;
  }
`;

export const TimeText = styled.h2`
  font-size: 32px;
  margin: 10px 0;
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;

export const ForecastBtns = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 15px;

  button {
    background: #ffb366;
    border: none;
    padding: 6px 14px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    font-family: inherit;
    color: #fff;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s;

    &:hover {
      background: #ffa040;
    }
  }
`;

export const DateLine = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
  color: ${(props) => props.theme.text};
  opacity: 0.8;
  display: flex;
  align-items: center;

  span {
    margin: 0 8px;
    color: #ccc;
    font-weight: 300;
  }
`;

export const MainIcon = styled.div`
  margin: 15px 0;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  }
`;

export const TempValue = styled.div`
  font-size: 46px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${(props) => props.theme.text};
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid ${(props) => props.theme.headerBorder};
`;

export const ActionIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
  color: ${(props) => props.theme.text};

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    /* Інвертуємо іконки-картинки для темної теми */
    filter: ${(props) => (props.theme.body === "#121212" ? "invert(1)" : "none")};
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const MoreBtn = styled.button`
  background: #ffb366;
  border: none;
  padding: 8px 20px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #ffa040;
    box-shadow: 0 4px 8px rgba(255, 179, 102, 0.3);
  }
`;