import React from 'react';
import dog1 from '../../imgs/pet1.png';
import cat1 from '../../imgs/pet2.png';
import dog2 from '../../imgs/pet3.png';
import dog3 from '../../imgs/pet4.png';

import { 
  PetsSection, PetsTitle, PetsGrid, 
  PetCard, PetImage, PetDescription, SeeMoreButton 
} from './Pets.styled';

const Pets = () => {
  const petArticles = [
    {
      id: 1,
      image: dog1,
      text: "Rescue pups pose as ghosts in festive photo shoot"
    },
    {
      id: 2,
      image: cat1,
      text: "Cat interrupts morning coffee on sunny Washington morning"
    },
    {
      id: 3,
      image: dog2,
      text: "New study finds dogs pay more attention to women"
    },
    {
      id: 4,
      image: dog3,
      text: "Petting dogs gives health benefit, even if they are not yours"
    }
  ];

  return (
    <div className="container">
      <PetsSection>
        <PetsTitle>Interacting with our pets</PetsTitle>
        
        <PetsGrid>
          {petArticles.map((article) => (
            <PetCard key={article.id}>
              <PetImage src={article.image} alt="Pet news" />
              <PetDescription>{article.text}</PetDescription>
            </PetCard>
          ))}
        </PetsGrid>

        <SeeMoreButton type="button">
          See more
        </SeeMoreButton>
      </PetsSection>
    </div>
  );
};


export default Pets;