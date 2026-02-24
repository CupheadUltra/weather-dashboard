import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  /* Колір тепер залежить від теми */
  background-color: ${(props) => props.theme.footerBg || "#ffb366"};
  padding: 30px 0 0 0; 
  margin-top: 50px;
  box-sizing: border-box;
  box-shadow: 0 0 0 100vmax ${(props) => props.theme.footerBg || "#ffb366"};
  clip-path: inset(0 -100vmax);
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

export const FooterContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: flex-end; /* Залишаємо вирівнювання по низу */
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
  /* ПІДНІМАЄМО ЛОГОТИП: робимо нижній відступ більшим, ніж у тексту */
  margin-bottom: 60px; 

  img {
    height: 55px;
    width: auto;
    display: block;
    /* Фільтр для видимості лого у темній темі */
    filter: ${(props) => 
      props.theme.body === "#121212" ? "invert(1) brightness(2)" : "none"};
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 0;
    align-self: center;
  }
`;

export const FooterInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: "Montserrat Alternates", sans-serif;
  /* Текст залишаємо трохи нижче за логотип (30px від дна) */
  margin-bottom: 30px; 

  &.address-block {
    margin-right: 120px;
  }

  @media (max-width: 1024px) {
    margin-right: 0 !important;
    margin-bottom: 0;
    align-items: center;
    text-align: center;
  }
`;

export const FooterTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
  /* Адаптивний колір тексту */
  color: ${(props) => (props.theme.body === "#121212" ? "#fff" : "#000")};
`;

export const FooterText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  color: ${(props) => (props.theme.body === "#121212" ? "#eee" : "#000")};
`;

export const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  /* Соцмережі також на рівні з текстом */
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
  user-select: none;
  -webkit-tap-highlight-color: transparent;

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
  transition: none; 

  transform: ${(props) => {
    let t = "";
    if (props.$mirrored) {
      t += "scaleX(-1) ";
    }
    if (props.$mirrored && props.$isMoving) {
      t += "translateX(-40px)"; 
    }
    return t || "none";
  }};
`;