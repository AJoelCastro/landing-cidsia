'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const images = [
  { src: '/img/nosotros1.jpg', alt: 'Equipo CIDSIA 1' },
  { src: '/img/nosotros2.jpg', alt: 'Equipo CIDSIA 2' },
  { src: '/img/nosotros3.jpg', alt: 'Equipo CIDSIA 3' },
];

export default function HeroCarousel() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      style={{ width: '100vw', height: '100vh' }}
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={idx === 0}
            />
            {/* Puedes agregar overlays/textos aquí si lo deseas */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}