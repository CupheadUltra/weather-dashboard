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
  CloseMenuBtn,
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

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setIsMenuOpen(false);
    if (isMenuOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const displayName = user?.username || user?.email || "User";

  const ThemeSwitcher = () => (
    <ThemeSwitcherContainer>
      <Sun
        size={18}
        color={currentTheme === "light" ? "#ffb366" : "#666"}
        style={{ opacity: currentTheme === "light" ? 1 : 0.5 }}
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
        size={18}
        color={currentTheme === "dark" ? "#ffb366" : "#666"}
        style={{ opacity: currentTheme === "dark" ? 1 : 0.5 }}
      />
    </ThemeSwitcherContainer>
  );

  return (
    <StyledHeader>
      <LogoContainer>
        <img src={logoImg} alt="logo" />
      </LogoContainer>

      <NavLinks>
        <a href="#gallery">Gallery</a>
        <a href="#contacts">Contacts</a>
        <a href="#dashboard">Dashboard</a>
      </NavLinks>

      <div
        style={{ marginLeft: "auto", marginRight: "20px" }}
        className="desktop-only"
      >
        <ThemeSwitcher />
      </div>

      <MobileMenuBtn onClick={() => setIsMenuOpen(true)}>
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
          style={{
            filter:
              currentTheme === "dark" ? "invert(1) brightness(2)" : "none",
          }}
        />
      </AuthSection>

      <MobileMenuPanel isOpen={isMenuOpen}>
        <CloseMenuBtn onClick={() => setIsMenuOpen(false)}>
          &times;
        </CloseMenuBtn>

        <div className="links-col">
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>
            Gallery
          </a>
          <a href="#contacts" onClick={() => setIsMenuOpen(false)}>
            Contacts
          </a>
          <a href="#dashboard" onClick={() => setIsMenuOpen(false)}>
            Dashboard
          </a>
        </div>

        <div className="profile-col">
          <ProfileIcon
            src={userIcon}
            alt="profile"
            style={{ width: "80px", height: "80px", marginBottom: "10px" }}
          />
          {user ? (
            <>
              <UserName style={{ fontSize: "20px" }}>{displayName}</UserName>
              <LogoutBtn
                onClick={() => {
                  onLogout();
                  setIsMenuOpen(false);
                }}
              >
                Log Out
              </LogoutBtn>
            </>
          ) : (
            <SignUpBtn
              onClick={() => {
                onOpenAuth();
                setIsMenuOpen(false);
              }}
            >
              Sign Up
            </SignUpBtn>
          )}

          <div className="theme-mobile">
            <ThemeSwitcher />
          </div>
        </div>
      </MobileMenuPanel>
    </StyledHeader>
  );
};

export default Header;
