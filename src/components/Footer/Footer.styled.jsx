import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${(props) =>
    props.theme.footerBg ||
    (props.theme.body === "#121212" ? "#1e1e1e" : "#ffb366")};
  padding: 30px 0 0 0;
  margin-top: 50px;
  box-sizing: border-box;
  box-shadow: 0 0 0 100vmax
    ${(props) =>
      props.theme.footerBg ||
      (props.theme.body === "#121212" ? "#1e1e1e" : "#ffb366")};
  clip-path: inset(0 -100vmax);
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

export const FooterContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
  }
`;

export const FooterLogo = styled.div`
  margin-right: 150px;
  margin-bottom: 60px;

  img {
    height: 55px;
    width: auto;
    display: block;
    filter: ${(props) =>
      props.theme.body === "#121212" ? "invert(1) brightness(2)" : "none"};
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

export const FooterInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: "Montserrat Alternates", sans-serif;
  margin-bottom: 30px;

  &.address-block {
    margin-right: 120px;
  }

  @media (max-width: 1024px) {
    margin-right: 0 !important;
    margin-bottom: 0;
    align-items: center;
  }
`;

export const FooterTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 0;
  color: ${(props) => (props.theme.body === "#121212" ? "#fff" : "#000")};
`;

export const FooterText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  margin: 0;
  color: ${(props) => (props.theme.body === "#121212" ? "#eee" : "#000")};
`;

export const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    margin-bottom: 10px;
  }
`;

export const SocialIcon = styled.a`
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

export const CharactersContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 15px;
  align-items: flex-end;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const CharacterImg = styled.img`
  height: 120px;
  width: auto;
  display: block;
  object-fit: contain;

  transform: ${(props) => {
    let t = "";
    if (props.$mirrored) t += "scaleX(-1) ";
    if (props.$mirrored && props.$isMoving) t += "translateX(-40px)";
    return t || "none";
  }};
`;
