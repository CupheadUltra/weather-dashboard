import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import nature1 from '../../imgs/nature1.png';
import nature2 from '../../imgs/nature2.png';
import nature3 from '../../imgs/nature3.png';
import nature4 from '../../imgs/nature4.png';
import nature5 from '../../imgs/nature5.png'; 

import { NatureSection, NatureTitle, SwiperWrapper } from './Nature.styled';

const Nature = () => {
  const images = [nature1, nature2, nature3, nature4, nature5];
  return (
    <div className="container">
      <NatureSection>
        <NatureTitle>Beautiful nature</NatureTitle>
        <SwiperWrapper>
          <Swiper
            modules={[EffectCoverflow]} 
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true} 
            loopAdditionalSlides={3}
            slidesPerView={'auto'} 
            coverflowEffect={{
              rotate: 0,
              stretch: -50,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Nature ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </NatureSection>
    </div>
  );
};
export default Nature;