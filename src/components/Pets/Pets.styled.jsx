import styled from 'styled-components';

export const PetsSection = styled.section`
  padding: 60px 0;
  font-family: "Montserrat Alternates", sans-serif;
`;

export const PetsTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 35px;
  color: #000;
  text-align: left;
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const PetDescription = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  color: #000;
  margin: 0;
`;


export const SeeMoreButton = styled.button`
  background-color: #FFB366;
  border: none;
  padding: 12px 35px;
  border-radius: 12px;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ffa040;
  }
`;