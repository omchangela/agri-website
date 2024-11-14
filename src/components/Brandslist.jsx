import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Dummy brand images
const brands = [
  'https://via.placeholder.com/100', // Replace these with actual brand image URLs
  'https://via.placeholder.com/100',
  'https://via.placeholder.com/100',
  'https://via.placeholder.com/100',
  'https://via.placeholder.com/100',
  'https://via.placeholder.com/100',
  'https://via.placeholder.com/100',
  'https://via.placeholder.com/100',
  'https://via.placeholder.com/100', // Additional brands for slider effect
  'https://via.placeholder.com/100'
];

const BrandsList = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-4">Our Brands</h2>
      <Swiper
        spaceBetween={20} // Space between each slide
        
        loop={true} // Infinite loop for continuous sliding
        className="w-full"
        breakpoints={{
          // When the viewport is >= 640px, display 2 slides
          640: { slidesPerView: 2 },
          // When the viewport is >= 768px, display 4 slides
          768: { slidesPerView: 4 },
          // When the viewport is >= 1024px, display 6 slides
          1024: { slidesPerView: 6 },
          // When the viewport is >= 1280px, display 8 slides
          1280: { slidesPerView: 8 },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="w-20 h-20 rounded-full object-cover mx-auto" // Center image on mobile
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandsList;
