import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 40px;
  background: ${(props) => props.theme.headerBg};
  border-bottom: 1px solid ${(props) => props.theme.headerBorder};
  position: relative;
  height: 75px;
  width: 100%;
  box-sizing: border-box;
  z-index: 1001;

  @media (max-width: 768px) { padding: 0 20px; }
  .desktop-only { @media (max-width: 1024px) { display: none; } }
`;

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  svg { display: block; }
`;

export const LogoContainer = styled.div`
  margin-right: 40px;
  display: flex;
  align-items: center;
  img { height: 45px; filter: ${(props) => props.theme.body === "#121212" ? "invert(1) brightness(2)" : "none"}; }
`;

export const NavLinks = styled.nav`
  display: flex; gap: 30px;
  @media (max-width: 1024px) { display: none; }
  a { text-decoration: none; color: ${(props) => props.theme.text}; font-weight: 500; transition: 0.2s; &:hover { color: ${(props) => props.theme.accent}; } }
`;

export const AuthSection = styled.div`
  display: flex; align-items: center; gap: 15px;
  @media (max-width: 1024px) { display: none; }
`;

export const SignUpBtn = styled.button`
  background: ${(props) => props.theme.accent}; border: none; padding: 10px 22px; border-radius: 12px; font-weight: 600; cursor: pointer; transition: 0.3s;
  &:hover { background: ${(props) => props.theme.accentHover}; }
`;

export const ProfileIcon = styled.img` width: 45px; height: 45px; border-radius: 50%; object-fit: cover; background: #eee; `;

export const UserName = styled.span` font-weight: 600; color: ${(props) => props.theme.text}; `;

export const LogoutBtn = styled.button` background: transparent; border: 1px solid ${(props) => props.theme.headerBorder}; color: ${(props) => props.theme.text}; padding: 5px 15px; border-radius: 10px; cursor: pointer; `;

export const MobileMenuBtn = styled.button`
  background: none; border: none; color: ${(props) => props.theme.text}; font-size: 18px; font-weight: 600; cursor: pointer; display: none; align-items: center; gap: 8px; margin-left: auto;
  @media (max-width: 1024px) { display: flex; }
`;

export const ArrowIcon = styled.span` display: inline-block; transition: transform 0.3s; transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")}; `;

export const MobileMenuPanel = styled.div`
  position: absolute; top: 100%; left: 0; width: 100%; background: ${(props) => props.theme.mobileMenu}; display: ${(props) => (props.isOpen ? "flex" : "none")}; justify-content: space-around; padding: 60px 40px; z-index: 1000; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) { flex-direction: column; align-items: center; gap: 40px; }
  .links-col { display: flex; flex-direction: column; gap: 30px; a { font-size: 28px; text-decoration: none; color: ${(props) => props.theme.text}; } }
  .profile-col { display: flex; flex-direction: column; align-items: center; gap: 20px; }
`;