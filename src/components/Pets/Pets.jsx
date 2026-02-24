import React, { useState } from "react";
import {
  PetsSection,
  PetsTitle,
  PetsGrid,
  PetCard,
  PetImage,
  PetDescription,
  SeeMoreButton,
} from "./Pets.styled";

import pet1 from "../../imgs/pet1.png";
import pet2 from "../../imgs/pet2.png";
import pet3 from "../../imgs/pet3.png";
import pet4 from "../../imgs/pet4.png";

const Pets = () => {
  const initialPets = [
    { id: "local1", webformatURL: pet1, tags: "Your favorite • Dog" },
    { id: "local2", webformatURL: pet2, tags: "Your favorite • Cat" },
    { id: "local3", webformatURL: pet3, tags: "Your favorite • Dog" },
    { id: "local4", webformatURL: pet4, tags: "Your favorite • Dog" },
  ];

  const [images, setImages] = useState(initialPets);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const API_KEY = "53703295-e75262fb494aab51a48093056";

  const fetchPets = async (pageNum) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=cute+pets+animals&image_type=photo&orientation=horizontal&per_page=4&page=${pageNum}`
      );
      const data = await response.json();

      if (data.hits) {
        setImages((prev) => [...prev, ...data.hits]);
      }
    } catch (error) {
      console.error("Pixabay API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSeeMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPets(nextPage);
  };

  return (
    <PetsSection>
      <PetsTitle>Interacting with our pets</PetsTitle>

      <PetsGrid>
        {images.map((img, index) => (
          <PetCard key={img.id || index}>
            <PetImage src={img.webformatURL} alt={img.tags} />
            <PetDescription>
              {img.id.toString().startsWith("local")
                ? img.tags
                : img.tags.split(",").slice(0, 3).join(" • ")}
            </PetDescription>
          </PetCard>
        ))}
      </PetsGrid>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <SeeMoreButton onClick={handleSeeMore} disabled={loading}>
          {loading ? "Loading..." : "See more"}
        </SeeMoreButton>
      </div>
    </PetsSection>
  );
};

export default Pets;
