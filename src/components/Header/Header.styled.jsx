import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 40px;
  background: white;
  position: relative;
  border-bottom: 1px solid #eee;
  font-family: "Montserrat Alternates", sans-serif;
  height: 70px;
`;

export const LogoContainer = styled.div`
  margin-right: 60px;
  display: flex;
  align-items: center;
  img {
    height: 45px;
    display: block;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 35px;

  @media (max-width: 1024px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    transition: color 0.2s;

    &:hover {
      color: #ffb366;
    }
  }
`;

export const AuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SignUpBtn = styled.button`
  background: #ffb366;
  border: none;
  padding: 10px 25px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  font-family: inherit;
  transition: background 0.3s;

  &:hover {
    background: #ffa040;
  }
`;

export const ProfileIcon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const MobileMenuBtn = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: none;
  align-items: center;
  gap: 10px;
  font-family: inherit;
  margin-left: auto;

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
  background: #e5e5e5;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: space-around;
  padding: 80px 40px;
  z-index: 1000;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .links-col {
    display: flex;
    flex-direction: column;
    gap: 40px;
    a {
      font-size: 32px;
      text-decoration: none;
      color: black;
      font-weight: 500;
    }
  }

  .profile-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const UserName = styled.span`
  font-weight: 600;
  font-family: inherit;
`;

export const LogoutBtn = styled.button`
  background: transparent;
  border: 1px solid #ccc;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
`;
