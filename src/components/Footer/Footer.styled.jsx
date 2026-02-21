import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: #ffb366;
  padding: 30px 0;
  margin-top: 50px;
  box-sizing: border-box;
`;

export const FooterContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const FooterLogo = styled.div`
  margin-right: 150px;

  img {
    height: 55px;
    width: auto;
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    align-self: flex-start;
  }
`;

export const FooterInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: "Montserrat Alternates", sans-serif;

  &.address-block {
    margin-right: 120px;
  }

  @media (max-width: 1024px) {
    margin-right: 0 !important;
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
  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;
