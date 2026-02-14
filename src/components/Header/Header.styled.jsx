import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  padding: 15px 0;
  background-color: #ffffff;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 50px;
    width: auto;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 50px;
`;

export const NavItem = styled.li`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: #3498db;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
`;

export const SignUpButton = styled.button`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 600;
  background-color: #ffb366;
  color: #000;
  border: none;
  padding: 10px 25px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
`;

export const UserAvatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #5d6d7e;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;