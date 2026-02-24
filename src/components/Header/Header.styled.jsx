import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 40px;
  background: ${(props) => props.theme.headerBg};
  border-bottom: 1px solid ${(props) => props.theme.headerBorder};
  position: relative;
  font-family: "Montserrat Alternates", sans-serif;
  height: 75px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const LogoContainer = styled.div`
  margin-right: 40px;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  img {
    height: 45px;
    display: block;
    /* Робимо логотип білим у темній темі */
    filter: ${(props) => 
      props.theme.body === "#121212" ? "invert(1) brightness(2)" : "none"};
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
    font-weight: 500;
    font-size: 16px;
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }
`;

export const AuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SignUpBtn = styled.button`
  background: ${(props) => props.theme.accent};
  border: none;
  padding: 10px 22px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  color: #000;
  font-family: inherit;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.accentHover};
  }
`;

export const ProfileIcon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  background: #eee;
`;

export const UserName = styled.span`
  font-weight: 600;
  font-family: inherit;
  color: ${(props) => props.theme.text};
`;

export const LogoutBtn = styled.button`
  background: transparent;
  border: 1px solid ${(props) => props.theme.headerBorder};
  color: ${(props) => props.theme.text};
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MobileMenuBtn = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  display: none;
  align-items: center;
  gap: 8px;
  margin-left: auto; /* На планшетах притискає кнопку до правого краю */

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const ArrowIcon = styled.span`
  display: inline-block;
  transition: transform 0.3s;
  transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")};
`;

export const MobileMenuPanel = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.mobileMenu};
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: space-around;
  padding: 60px 40px;
  z-index: 1000;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .links-col {
    display: flex;
    flex-direction: column;
    gap: 30px;
    a {
      font-size: 28px;
      text-decoration: none;
      color: ${(props) => props.theme.text};
      font-weight: 500;
    }
  }

  .profile-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: ${(props) => props.theme.text};
  }
`
export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center; /* Це вирівняє центри іконок та слайдера */
  justify-content: center;
  gap: 10px;
  flex-shrink: 0; /* Не дає кнопці Sign Up стискати перемикач */

  svg {
    display: block; /* Прибирає дефолтні відступи знизу у іконок */
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;