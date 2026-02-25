import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
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

  // Закриття мобільного меню при натисканні на клавішу Escape
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  // Закриття меню при зміні розміру екрана (опціонально, для надійності)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayName = user?.username || user?.email || "User";

  const ThemeSwitcher = () => (
    <ThemeSwitcherContainer>
      <Sun
        size={20}
        color={currentTheme === "light" ? "#ffb366" : "#666"}
        style={{
          opacity: currentTheme === "light" ? 1 : 0.5,
          transition: "0.3s",
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
        color={currentTheme === "dark" ? "#ffb366" : "#666"}
        style={{
          opacity: currentTheme === "dark" ? 1 : 0.5,
          transition: "0.3s",
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

      <div style={{ marginLeft: 'auto', marginRight: '20px' }} className="desktop-only">
        <ThemeSwitcher />
      </div>

      <MobileMenuBtn onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Menu <ArrowIcon isOpen={isMenuOpen}>❯</ArrowIcon>
      </MobileMenuBtn>

      <AuthSection>
        {user ? (
          <>
            <UserName>{displayName}</UserName>
            <LogoutBtn onClick={onLogout}>Log Out</LogoutBtn>
          </>
        ) : (
          <SignUpBtn onClick={onOpenAuth}>Sign Up</SignUpBtn>
        )}
        <ProfileIcon 
            src={userIcon} 
            alt="profile" 
            style={{ filter: currentTheme === "dark" ? "invert(1) brightness(2)" : "none" }}
        />
      </AuthSection>

      {/* Мобільна панель меню */}
      <MobileMenuPanel isOpen={isMenuOpen}>
        {/* Кнопка закриття (хрестик) */}
        <span
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "25px",
            cursor: "pointer",
            fontSize: "40px",
            color: currentTheme === "dark" ? "#fff" : "#333",
            zIndex: 101,
            lineHeight: "1"
          }}
        >
          &times;
        </span>

        <div className="links-col">
          <a href="#who" onClick={() => setIsMenuOpen(false)}>Who we are</a>
          <a href="#contacts" onClick={() => setIsMenuOpen(false)}>Contacts</a>
          <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
        </div>
        
        <div className="profile-col">
          <ProfileIcon src={userIcon} alt="profile" style={{ width: "120px", height: "120px" }} />
          {!user && (
            <SignUpBtn onClick={() => { onOpenAuth(); setIsMenuOpen(false); }}>
              Sign Up
            </SignUpBtn>
          )}
          {user && <UserName style={{ fontSize: "22px", margin: "10px 0" }}>{displayName}</UserName>}
          {user && (
            <LogoutBtn onClick={() => { onLogout(); setIsMenuOpen(false); }}>
              Log Out
            </LogoutBtn>
          )}
          <div style={{ marginTop: '30px' }}>
            <ThemeSwitcher />
          </div>
        </div>
      </MobileMenuPanel>
    </StyledHeader>
  );
};

export default Header;
