import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: #ffb366;
  /* Нульовий падінг знизу, щоб персонажі торкалися краю */
  padding: 30px 0 0 0; 
  margin-top: 50px;
  box-sizing: border-box;
  box-shadow: 0 0 0 100vmax #ffb366;
  clip-path: inset(0 -100vmax);
  overflow: hidden;
`;

export const FooterContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  /* Вирівнюємо контент по нижньому краю */
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
  /* Піднімаємо логотип трохи вище від дна */
  margin-bottom: 30px; 

  img {
    height: 55px;
    width: auto;
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
  /* Піднімаємо текст трохи вище від дна */
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
  color: #000;
`;

export const FooterText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  color: #000;
`;

export const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
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
  /* Запобігаємо виділенню картинки синім кольором при частих кліках */
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
  
  /* Жодних анімацій руху — зміна має бути миттєвою */
  transition: none; 

  transform: ${(props) => {
    let t = "";
    
    // 1. Віддзеркалюємо Ланіно
    if (props.$mirrored) {
      t += "scaleX(-1) ";
    }

    // 2. Якщо натиснуто (йде гіфка) — миттєво зсуваємо його ближче
    // Від'ємне значення (наприклад, -40px) посуне його вправо, бо він віддзеркалений
    if (props.$mirrored && props.$isMoving) {
      t += "translateX(-40px)"; 
    }

    return t || "none";
  }};
`;