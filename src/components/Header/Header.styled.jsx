import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: ${(props) => props.theme.headerBg};
  border-bottom: 1px solid ${(props) => props.theme.headerBorder};
  position: sticky;
  top: 0;
  height: 75px;
  width: 100%;
  box-sizing: border-box;
  z-index: 1001;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 45px;
    filter: ${(props) =>
      props.theme.body === "#121212" ? "invert(1) brightness(2)" : "none"};
  }
`;

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  svg {
    display: block;
    color: ${(props) => props.theme.text};
  }
`;
export const NavLinks = styled.nav`
  display: flex;
  gap: 30px;

  margin-left: 60px;

  @media (max-width: 1024px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
    font-weight: 500;
    font-size: 18px;
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.accent || "#ffb366"};
    }
  }
`;
export const AuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
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
  transition: 0.3s;
  &:hover {
    background: #ffa040;
  }
`;

export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;
export const LogoutBtn = styled.button`
  background: transparent;
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};

  padding: 6px 16px;
  border-radius: 20px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;

  transition: all 0.3s ease;

  &:hover {
    border-color: #ffb366;
    color: #ffb366;
    background: rgba(255, 179, 102, 0.1);
  }

  &:active {
    transform: scale(0.98);
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
  margin-left: auto;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const CloseMenuBtn = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 45px; 
  line-height: 1;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  z-index: 1100; 
  
  &:active {
    background-color: rgba(128, 128, 128, 0.1);
    border-radius: 50%;
  }
`;

export const MobileMenuPanel = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  z-index: 1000;
  transition: right 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 100px 40px 40px;
  box-sizing: border-box;

  .links-col {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 40px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.2);
    padding-bottom: 30px;

    a {
      font-size: 26px;
      font-weight: 700;
      text-decoration: none;
      color: ${(props) => props.theme.text};
      text-align: center;
    }
  }

  .profile-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    .theme-mobile {
      margin-top: 30px;
      padding: 15px 25px;
      background: rgba(128, 128, 128, 0.1);
      border-radius: 30px;
    }
  }
`;

export const ArrowIcon = styled.span`
  display: inline-block;
  margin-left: 8px;
  transition: transform 0.3s;
  transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")};
`;