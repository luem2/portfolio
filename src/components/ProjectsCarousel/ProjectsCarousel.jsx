import React from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectCard } from './ProjectCard';
import { henryGames, rgbTech, henryGameslogo, rgbTechlogo } from '/src/assets';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function ProjectsCarousel() {
  const projectData = [
    {
      name: 'Henry Games',
      src: henryGames,
      alt: 'henry-games',
      gh: 'https://github.com/Luem2/pi-videogames',
      web: 'https://henrygames.lucianopinol.com/',
      logo: henryGameslogo,
      description: '',
      technologies: {
        backend: 'React, Redux, Express, NodeJS, PostgreSQL, Sequelize',
        frontend: '',
      },
    },
    {
      name: 'RGBTech',
      src: rgbTech,
      alt: 'rgb-tech',
      gh: 'https://github.com/RGBTech-PF/rgbtech',
      web: 'https://rgbtech.vercel.app/',
      logo: rgbTechlogo,
      description: '',
      technologies: '',
    },
  ];
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#3694ff',
          '--swiper-navigation-size': '40px',
          width: '100%',
          height: '100%',
        }}
        pagination={{ clickable: true }}
        navigation
        direction={'horizontal'}
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={50}
        height={'100%'}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1520: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide onClick={() => console.log('hola')}>
          <ProjectCard project={projectData[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard project={projectData[1]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
