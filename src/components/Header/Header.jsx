import React, { useState } from "react";
import { Sun, Moon } from "lucide-react"; // Імпортуємо іконки
import {
  StyledHeader,
  LogoContainer,
  NavLinks,
  AuthSection,
  SignUpBtn,
  ProfileIcon,
  LogoutBtn,
  UserName,
  MobileMenuBtn,
  MobileMenuPanel,
  ArrowIcon,
  ThemeSwitcherContainer,
} from "./Header.styled";

import {
  ToggleWrapper,
  ToggleInput,
  Slider,
} from "../Theme/ThemeToggle.styled";
import logoImg from "../../imgs/logoForecast.svg";
import userIcon from "../../imgs/userlogin.png";

const Header = ({ user, onOpenAuth, onLogout, toggleTheme, currentTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Спільний компонент для перемикача з іконками, щоб не дублювати код
  // Заміни свій внутрішній компонент ThemeSwitcher на цей:
  // Header.jsx
const ThemeSwitcher = () => (
  <ThemeSwitcherContainer>
    <Sun
      size={20}
      strokeWidth={2} // Додаємо товщину ліній для кращої видимості
      color={currentTheme === "light" ? "#ffb366" : "#666"}
      style={{
        opacity: currentTheme === "light" ? 1 : 0.5,
        transition: "0.3s",
        display: "block" // Гарантує відображення
      }}
    />
    <ToggleWrapper>
      <ToggleInput
        type="checkbox"
        onChange={toggleTheme}
        checked={currentTheme === "dark"}
      />
      <Slider />
    </ToggleWrapper>
    <Moon
      size={20}
      strokeWidth={2}
      color={currentTheme === "dark" ? "#ffb366" : "#666"}
      style={{
        opacity: currentTheme === "dark" ? 1 : 0.5,
        transition: "0.3s",
        display: "block"
      }}
    />
  </ThemeSwitcherContainer>
);

  return (
    <StyledHeader>
      <LogoContainer>
        <img src={logoImg} alt="logo" />
      </LogoContainer>

      <NavLinks>
        <a href="#who">Who we are</a>
        <a href="#contacts">Contacts</a>
        <a href="#menu">Menu</a>
      </NavLinks>

      {/* Перемикач для десктопа */}
      <div style={{ marginLeft: "auto", marginRight: "20px" }}>
        <ThemeSwitcher />
      </div>

      <MobileMenuBtn onClick={toggleMenu}>
        Menu <ArrowIcon isOpen={isMenuOpen}>❯</ArrowIcon>
      </MobileMenuBtn>

      <AuthSection>
        {user ? (
          <>
            <UserName>{user.username}</UserName>
            <LogoutBtn onClick={onLogout}>Log Out</LogoutBtn>
          </>
        ) : (
          <SignUpBtn onClick={onOpenAuth}>Sign Up</SignUpBtn>
        )}
        <ProfileIcon src={userIcon} alt="profile" />
      </AuthSection>

      <MobileMenuPanel isOpen={isMenuOpen}>
        <div className="links-col">
          <a href="#who" onClick={closeMenu}>
            Who we are
          </a>
          <a href="#contacts" onClick={closeMenu}>
            Contacts
          </a>
          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>
        </div>

        <div className="profile-col">
          <ProfileIcon
            src={userIcon}
            alt="profile"
            style={{ width: "120px", height: "120px" }}
          />
          {!user && (
            <SignUpBtn
              onClick={() => {
                onOpenAuth();
                closeMenu();
              }}
            >
              Sign Up
            </SignUpBtn>
          )}
          {user && <UserName>{user.username}</UserName>}

          <div style={{ marginTop: "30px" }}>
            <ThemeSwitcher />
          </div>
        </div>
      </MobileMenuPanel>
    </StyledHeader>
  );
};

export default Header;
