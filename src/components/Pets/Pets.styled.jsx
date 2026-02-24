import styled from "styled-components";

export const PetsSection = styled.section`
  padding: 60px 0;
  font-family: "Montserrat Alternates", sans-serif;
  background: ${(props) => props.theme.body};
  transition: background 0.3s ease;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const PetsTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 35px;
  color: ${(props) => props.theme.text};
  transition: color 0.3s ease;
`;

export const PetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-bottom: 40px;
`;

export const PetCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PetImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 11;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: ${(props) => 
    props.theme.body === "#121212" 
      ? "0 4px 15px rgba(0, 0, 0, 0.5)" 
      : "0 4px 10px rgba(0, 0, 0, 0.1)"};
  transition: box-shadow 0.3s ease;
`;

export const PetDescription = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  color: ${(props) => props.theme.text};
  transition: color 0.3s ease;
  opacity: 0.9; 
`;

export const SeeMoreButton = styled.button`
  /* Колір кнопки з теми (помаранчевий) */
  background-color: ${(props) => props.theme.accent};
  border: none;
  padding: 12px 35px;
  border-radius: 12px;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  color: #000;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.accentHover || "#ffa040"};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;