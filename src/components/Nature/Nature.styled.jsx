import styled from 'styled-components';

export const NatureSection = styled.section`
  padding: 40px 0;
  max-width: 1160px;
  margin: 0 auto;
`;

export const NatureTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 25px;
`;

export const SwiperWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  .swiper {
    padding: 40px 0;
    overflow: visible !important;
  }

  
  .swiper-slide {
    width: 450px; 
    height: 280px;
    transition: all 0.5s ease-in-out;
    filter: brightness(0.4); 
    transform: scale(0.85);
    z-index: 1;
  }

  .swiper-slide-active {
    filter: brightness(1);
    transform: scale(1.1); 
    z-index: 10 !important;
    position: relative;
  }

  .swiper-slide-next,
  .swiper-slide-prev {
    z-index: 5;
    filter: brightness(0.6);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.4);
  }
`;