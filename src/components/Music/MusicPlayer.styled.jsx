import styled from "styled-components";

export const PlayerContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: auto;
  min-width: 220px;
  max-width: 450px;

  background: ${(props) =>
    props.theme.body === "#FFF"
      ? "rgba(0, 0, 0, 0.08)"
      : "rgba(255, 255, 255, 0.1)"};

  backdrop-filter: blur(12px);
  border: 1px solid
    ${(props) =>
      props.theme.body === "#FFF"
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255, 255, 255, 0.2)"};

  border-radius: 15px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 2000;
  box-shadow: ${(props) =>
    props.theme.body === "#FFF"
      ? "0 4px 15px rgba(0, 0, 0, 0.05)"
      : "0 8px 32px rgba(0, 0, 0, 0.3)"};

  color: ${(props) => props.theme.text};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: 600px) {
    bottom: 15px;
    left: 10px;
    right: 10px;
    min-width: 0;
    max-width: none;
    padding: 10px 15px;
    gap: 10px;
  }
`;

export const TrackInfo = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;

  .title {
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    font-family: "Montserrat Alternates", sans-serif;

    @media (max-width: 600px) {
      font-size: 13px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .artist {
    font-size: 11px;
    opacity: 0.6;
    margin: 0;

    @media (max-width: 600px) {
      font-size: 10px;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 10px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.text};
    padding: 0;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: #ffb366;
    }

    svg {
      fill: ${(props) => props.theme.text};

      @media (max-width: 600px) {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ffb366;
  border: none;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 2001;

  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
    top: -6px;
    right: -6px;
  }
`;

export const OpenPlayerBtn = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  background-color: #ffb366;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 2000;

  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
    bottom: 15px;
    left: 15px;
  }
`;
